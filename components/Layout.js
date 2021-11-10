import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <Container
      minW="100%"
      minH="100vh"
      p={0}
      display="flex"
      flexDirection="column"
      bg="#282828"
      fontFamily="Poppins"
      color="white"
    >
      <Navbar></Navbar>
      <Container maxW="container.lg" p={10}>
        {children}
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
