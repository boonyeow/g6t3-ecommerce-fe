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

const ProductPage = () => {
  const { id } = useParams();
  const product = {
    id: "110",
    name: "Fresh Blueberries",
    seller: "Fresh",
    image_url:
      "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/10632060_XL1_20201014.jpg?w=1200&q=70",
    price: "3.90",
    reviews: [
      {
        order_id: 100,
        user_id: "bytan@gmail.com",
        review_description: "refund!!!",
        review_stars: 1,
        review_date: "2023-04-02T15:36:19.164+00:00",
        purchase_date: "2023-04-01T15:39:32.000+00:00",
      },
    ],
  };

  return (
    <Flex w="100%">
      <Box w="8xl" m="auto" mt="24">
        <HStack mt={2} p={4} spacing={24}>
          <Image src={product.image_url} w="500px" h="500px"></Image>
          <VStack alignItems="start">
            <Heading>{product.name}</Heading>
            <RLink>{`Sold by ${product.seller}`}</RLink>
            <Text>{product.description}</Text>
            <Box>
              <Text>Quantity</Text>
              <NumberField />
            </Box>

            <Box>
              <Text>Price</Text>
              <Text
                fontSize="2xl"
                fontWeight="bold">{`$${product.price}`}</Text>
            </Box>
            <Button colorScheme="teal" size="lg">
              Add to cart
            </Button>
          </VStack>
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
