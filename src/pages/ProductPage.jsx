import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  Container,
  Flex,
  HStack,
  Heading,
  Image,
  SimpleGrid,
  Link,
  Text,
  VStack,
} from "@chakra-ui/react";
import { Link as RLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import NumberField from "../components/NumberField";
import { useEffect, useState } from "react";
import axios from "axios";

const ProductPage = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const fetchProductDetails = () => {
    axios
      .get(`${import.meta.env.VITE_PRODUCT_ENDPOINT}/product/get/${id}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  };

  useEffect(() => {
    console.log(quantity);
  }, [quantity]);

  useEffect(() => {
    fetchProductDetails();
  }, []);

  return (
    <Flex w="100%">
      <Box w="8xl" m="auto" mt="24">
        <HStack mt={2} p={4} spacing={24}>
          <Image src={product.image_url} w="500px" h="500px"></Image>
          <Box>
            <VStack alignItems="start">
              <Heading>{product.product_name}</Heading>
              <Box>
                <Text>Quantity</Text>
                <NumberField
                  onChange={(val) => {
                    setQuantity(val);
                  }}
                  max={product.stock}
                />
                <Text>{product.stock - quantity} stock available</Text>
              </Box>
            </VStack>
            <Box mt={2}>
              <Text>Price</Text>
              <Text
                fontSize="2xl"
                fontWeight="bold">{`$${product.price}`}</Text>
            </Box>
            <Button colorScheme="teal" size="lg">
              Add to cart
            </Button>
          </Box>
        </HStack>
        <Box mt={2} p={4}>
          <Text fontWeight="bold" fontSize="3xl">
            Reviews
          </Text>
          <VStack alignItems="start">
            <Box></Box>
            <Text>Review 1</Text>
            <Text>Review description</Text>
          </VStack>
        </Box>
      </Box>
    </Flex>
  );
};

export default ProductPage;
