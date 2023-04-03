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
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const BrowseProductsPage = () => {
  const { id } = useParams();
  const products = [
    {
      id: "100",
      name: "Pasar South Korea Strawberry",
      description: "hello",
      seller: "Pasar",

      image_url:
        "https://media.nedigital.sg/fairprice/fpol/media/images/product/XL/13092218_XL1_20221123.jpg?w=1200&q=70",
      price: "8.75",
      quantityAvailable: 10,
    },
    {
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
    },
  ];

  return (
    <Flex w="100%">
      <Box w="8xl" m="auto" mt="24">
        <Heading>All Products (100)</Heading>

        <Box mt={2} p={4}>
          <SimpleGrid columns={4} spacing={10}>
            {products.map((x) => {
              return (
                <Card
                  boxShadow={"md"}
                  borderRadius={16}
                  as={Link}
                  to={`/product/${x.id}`}>
                  <CardBody>
                    <Image src={x.image_url} />
                    <Text fontSize="lg" fontWeight="bold">
                      {x.name}
                    </Text>
                    <Text>{`$${x.price}`}</Text>
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
