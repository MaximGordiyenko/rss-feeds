import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import { devices } from "../../constants/devices.js";

export const LinkCSS = styled(Link)`
  text-decoration-line: none;
  color: white;

  @media screen and (${devices.tablet}) {
    color: red;
  }
`;
