import styled from "styled-components";

export const Button = styled.button`
  background: linear-gradient(to bottom, #ff416c, #ff4b2b);
  border: none;
  color: white;
  padding: 10px;
  text-align: center;
  text-decoration: none;
  font-size: 14px;
  margin: 20px 10px;
  cursor: pointer;
`;

export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 20px;
`;

export const PageButton = styled.button`
  background-color: ${({ active }) => active ? '#007bff' : '#ffffff'};
  color: ${({ active }) => active ? '#ffffff' : '#000000'};
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
`;


export const StyledFeedItem = styled.div`
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 8px;
`;

export const Meta = styled.div`
  color: #717171;
  font-size: 14px;
  margin-bottom: 8px;
`;

export const ContentSnippet = styled.p`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const Content = styled.div`
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 8px;
`;

export const Author = styled.p`
  color: #717171;
  font-size: 14px;
`;

export const Container = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: #fff;
  padding: 20px;
  width: 800px;
  height: 600px;
  max-width: 80%;
  max-height: 80%;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  height: 5%;
  box-sizing: border-box;
  padding: 8px;
  margin: 6px 0;
`;
