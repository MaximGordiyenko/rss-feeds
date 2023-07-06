import { Container, Input, Button } from "../styles";
import { useData } from "../context/PostProvider";

export const EditModal = ({ id, isOpen, setIsOpen, feed }) => {
  const { updateData, inputAction, title, author, content, dispatch } = useData();
  
  return (
    <div>
      {isOpen && (
        <Container>
          <button onClick={() => setIsOpen(!isOpen)} style={{ position: 'absolute', right: '10px' }}>X</button>
          <h1>ID: {id}</h1>
          <form onSubmit={event => {
            event.preventDefault();
            updateData(id, { title, content, author });
            setIsOpen(!isOpen);
          }}>
            <label>
              Author:
              <Input
                type="text"
                name="author"
                defaultValue={feed.author}
                onChange={(e) => inputAction(dispatch, e)}
              />
            </label>
            <label>
              Title:
              <Input
                type="text"
                name="title"
                defaultValue={feed.title}
                onChange={(e) => inputAction(dispatch, e)}
              />
            </label>
            <label>
              Content:
              <Input
                type="text"
                name="content"
                defaultValue={feed.content}
                onChange={(e) => inputAction(dispatch, e)}
              />
            </label>
            <Button type="submit">Submit</Button>
          </form>
        </Container>
      )}
    </div>
  );
};
