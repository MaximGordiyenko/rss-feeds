import Container from "@mui/material/Container";

export const Main = ({children}) => {
  return (
    <Container component="main" maxWidth='xl' sx={{px: 0}}>
      {children}
    </Container>
  );
};
