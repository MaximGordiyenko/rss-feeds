import { useState } from "react";
import { useData } from "../../context/constants.jsx";
import { EditModal } from "../../modals/feed/EditModal.jsx";
import { StyledFeedItem, Title, Meta, ContentSnippet, Content, Author } from "./feed.styles.js";

export const Feed = ({ id, title, pubDate, isoDate, contentSnippet, content, author, feed }) => {
  const { deleteData } = useData();
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <StyledFeedItem>
      <Title>{title}</Title>
      <Meta>
        Publication Date: {Date(pubDate)} | ISO Date: {Date(isoDate)}
      </Meta>
      <ContentSnippet>{contentSnippet}</ContentSnippet>
      <Content>{content}</Content>
      <Author>Author: {author}</Author>
      <button onClick={() => setIsOpen(!isOpen)}>Edit Feed</button>
      <button onClick={() => deleteData(id)}>Delete</button>
  
      <EditModal
        id={id}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        feed={feed}
      />
    </StyledFeedItem>
  );
};
