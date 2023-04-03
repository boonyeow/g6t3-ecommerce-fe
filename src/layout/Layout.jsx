import { Box } from "@chakra-ui/react";
import Header from "../components/Header";

const Layout = ({ children, className }) => {
  return (
    <Box>
      <Header />
      <Box as="main" minH={"calc(100vh - 150px)"}>
        {children}
      </Box>
      <Box>Hello this is footer</Box>
    </Box>
  );
};

export default Layout;
