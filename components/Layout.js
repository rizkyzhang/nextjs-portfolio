import { Container } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

const Layout = ({ children }) => {
  return (
    <Container
      minW="100%"
      minH="100vh"
      p={0}
      display="flex"
      flexDirection="column"
      bg="#282C34"
      fontFamily="Poppins"
      color="white"
    >
      <Navbar></Navbar>
      <Container maxW="container.lg" px={5} py={10}>
        {children}
        <ScrollToTop />
      </Container>
      <Footer></Footer>
    </Container>
  );
};

export default Layout;
