import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Tag,
  TagLabel,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const BrowseProductsPage = () => {
  const [products, setProducts] = useState([]);
  const fetchProductList = () => {
    axios
      .get(`${import.meta.env.VITE_PRODUCT_ENDPOINT}/product/get`)
      .then((res) => {
        setProducts(res.data.data);
      });
  };

  useEffect(() => {
    fetchProductList();
  }, []);

  return (
    <Flex w="100%">
      <Box w="8xl" m="auto" mt="24">
        <Heading>
          All Products
          <Tag
            variant="subtle"
            colorScheme="blue"
            verticalAlign={"middle"}
            ml={"10px"}>
            <TagLabel>{products.length}</TagLabel>
          </Tag>
        </Heading>

        <Box mt={2} p={4}>
          <SimpleGrid columns={4} spacing={10}>
            {products.map((x) => {
              return (
                <Card
                  borderRadius={16}
                  as={Link}
                  to={`/product/${x.product_id}`}>
                  <CardBody>
                    <Image
                      src={x.image_url}
                      objectFit="contain"
                      h="300px"
                      w="100%"
                    />
                    <Stack mt="3">
                      <Text fontSize="lg" fontWeight="bold">
                        {x.product_name}
                      </Text>
                      <Text>{`$${x.price}`}</Text>
                    </Stack>
                  </CardBody>
                </Card>
              );
            })}

            <Box bg="white"></Box>
          </SimpleGrid>
        </Box>
      </Box>
    </Flex>
  );
};

export default BrowseProductsPage;
