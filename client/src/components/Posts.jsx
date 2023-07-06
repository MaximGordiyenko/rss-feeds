import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useCookies } from "react-cookie";
import { useData } from "../context/PostProvider";
import { Pagination, PageButton, Button } from "../styles";
import { Feed } from "./Feed";
import { api } from "../api";
import { Filter } from "./Filter";

export const Posts = () => {
  const {
    data,
    loading,
    error,
    fetchData,
    getSortedDataByTitleDesc,
    getSortedDataByTitleAsc
  } = useData();
  const navigate = useNavigate();
  const [cookies, setCookie, removeCookie] = useCookies(["jwt"]);
  const [currentPage, setCurrentPage] = useState(1);
  
  const itemsPerPage = 5;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data?.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(data?.length / itemsPerPage);
  
  const handlePageChange = page => setCurrentPage(page);
  
  const verifyUser = async () => {
    try {
      if (!cookies.jwt) {
        navigate("/login");
      } else {
        const { data } = await api.post("/", {});
        if (!data.status) {
          removeCookie("jwt");
          navigate("/login");
        } else
          toast(`Hi ${data.user}`, {
            theme: "dark",
          });
      }
    } catch (error) {
      throw error;
    }
  };
  
  const logOut = () => {
    removeCookie("jwt");
    navigate("/login");
  };
  
  useEffect(() => {
    verifyUser();
    fetchData();
  }, [cookies, navigate, removeCookie]);
  
  if (loading) {
    return <div>Loading...</div>;
  }
  
  if (error) {
    return <div>Error: {error}</div>;
  }
  
  return (
    <>
      <Button onClick={getSortedDataByTitleDesc}>Sort Title by Desc ↓</Button>
      <Button onClick={getSortedDataByTitleAsc}>Sort Title by Asc ↑</Button>
      <br/>
      <Filter/>
      {
        loading ? <div>Loading...</div> :
          data && currentItems?.map(item =>
            <Feed
              key={item.id}
              id={item.id}
              title={item.title}
              pubDate={item.pubDate}
              isoDate={item.isoDate}
              link={item.link}
              contentSnippet={item.contentSnippet}
              content={item.content}
              author={item.author}
              feed={item}
            />
          )}
      <Pagination>
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(page =>
          <PageButton
            onClick={() => handlePageChange(page)}
            active={page === currentPage}
            key={page}>
            {page}
          </PageButton>
        )}
      </Pagination>
      <Button onClick={logOut}>Log out</Button>
    </>
  );
};
