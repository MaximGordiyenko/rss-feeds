import styled from "styled-components";

export const PageButton = styled.button`
  background-color: ${({ active }) => active ? '#007bff' : '#ffffff'};
  color: ${({ active }) => active ? '#ffffff' : '#000000'};
  border: 1px solid #dddddd;
  border-radius: 4px;
  padding: 8px 16px;
  margin: 0 4px;
  cursor: pointer;
`;


export const Pagination = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: start;
  margin-top: 20px;
`;
