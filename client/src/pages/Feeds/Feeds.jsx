import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useData } from "../../context/constants.jsx";
import { Button } from "../../styles.jsx";
import { Feed } from "../../components/feeds/Feed.jsx";
import { Filter } from "../../components/Filter.jsx";
import { verifyUser } from "../../apis/auth/api.js";
import { Pagination, PageButton } from "./feeds.styles.js";

export const Feeds = () => {
  const {
    data,
    loading,
    error,
    fetchFeeds,
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
  
  useEffect(() => {
    verifyUser(cookies, navigate, removeCookie).then(r => r);
    fetchFeeds();
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
    </>
  );
};
