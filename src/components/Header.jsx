import React from "react";
import { Link as RLink, useLocation } from "react-router-dom";
import { Box, Container, Flex, HStack, Link } from "@chakra-ui/react";

const menuItems = [
  {
    path: "/products",
    name: "Browse Products",
  },
  {
    path: "/cart",
    name: "Cart",
  },
  {
    path: "/orders",
    name: "Orders",
  },
  {
    path: "/login",
    name: "Login",
  },
];

const Header = ({ scrolled }) => {
  const location = useLocation();
  return (
    <Flex
      as="header"
      color="primary.content"
      position="sticky"
      top="0"
      zIndex="100"
      transition="all 0.2s ease-in-out"
      h="100px"
      px={24}
      justifyContent={"center"}
      alignItems="center"
      // borderBottom="2px"
      bgColor="white"
      boxShadow="xl"
    >
      <Box className="hidden md:flex">
        <HStack spacing="10">
          {menuItems.map((item) => (
            <Link
              as={RLink}
              key={item.name}
              to={item.path}
              variant={location.pathname === item.path ? "active" : "inactive"}
            >
              {item.name}
            </Link>
          ))}
        </HStack>
      </Box>
    </Flex>
  );
};

export default Header;
