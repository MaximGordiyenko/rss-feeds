import { Input, Button } from "../styles";
import { useData } from "../context/PostProvider";

export const Filter = () => {
  const {
    data,
    filterTitle,
    dispatch,
    inputAction,
    getFilteredDataByTitle,
  } = useData();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      getFilteredDataByTitle(filterTitle);
    }}>
      <Input
        onChange={(e) => inputAction(dispatch, e)}
        defaultValue={data?.filterTitle}
        type="text"
        name="filterTitle"
        placeholder="Filter by title"
      />
      <Button type='submit'>Filter</Button>
    </form>
  );
};
