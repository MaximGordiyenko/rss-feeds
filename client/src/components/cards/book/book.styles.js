import { styled } from "@mui/material/styles";
import { Card, Paper } from "@mui/material";

export const CardCSS = styled(Card)`
  max-width: 400px;
  margin: 50px 0;
`;

export const PaperCSS = styled(Paper)`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  background-color: #cff1f6;
`;
