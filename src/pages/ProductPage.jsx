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
import { Link as RLink, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import NumberField from "../components/NumberField";
import { useEffect, useState } from "react";
import axios from "axios";
import { useAuthStore } from "../store";
import Swal from "sweetalert2";

const ProductPage = () => {
  const { id } = useParams();
  const { email, token } = useAuthStore();
  const [product, setProduct] = useState({});
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const fetchProductDetails = () => {
    axios
      .get(`${import.meta.env.VITE_PRODUCT_ENDPOINT}/product/get/${id}`)
      .then((res) => {
        setProduct(res.data.data);
      });
  };

  useEffect(() => {
    fetchProductDetails();
  }, []);

  const addToCart = () => {
    console.log(product);
    console.log(quantity);
    let data = {
      product_id: product["product_id"],
      product_name: product["product_name"],
      stock: product["stock"],
      price: product["price"],
      price_api: product["price_api"],
      seller_email: product["seller_email"],
      image_url: product["image_url"],
      quantity: Number(quantity),
    };

    axios
      .post(
        `${import.meta.env.VITE_CART_ENDPOINT}/cart/add_item_to_cart/${email}`,
        data,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log("ress", res);
        fetchProductDetails();
        Swal.fire({
          icon: "success",
          title: "Success!",
          text: `Added cart!`,
          confirmButtonText: "View Cart",
          showCancelButton: true,
          cancelButtonText: "Back",
          confirmButtonColor: "#262626",
        }).then((result) => {
          if (result.isConfirmed) {
            navigate("/cart");
          }
        });
      })
      .catch((e) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: JSON.stringify(e),
          confirmButtonColor: "#262626",
        });
      });
  };

  return (
    <Flex w="100%">
      <Box w="6xl" m="auto" mt="24">
        <HStack mt={2} p={4} spacing={24}>
          <Flex
            w="500px"
            h="500px"
            p="35px"
            borderRadius="15px"
            border="1px"
            borderColor="#efefef"
            alignItems="center">
            <Image
              src={product.image_url}
              objectFit="contain"
              h="300px"
              w="100%"></Image>
          </Flex>
          <Box>
            <VStack alignItems="start">
              <Box>
                <Heading>{product.product_name}</Heading>
                <Text
                  fontSize="xl"
                  fontWeight="bold">{`$${product.price}`}</Text>
              </Box>
              <Box>
                Sold by{" "}
                <Link variant="link" color="#2081e2" fontWeight="semibold">
                  {product.seller_email?.split(".")[0]}
                </Link>
              </Box>
              <Box>
                <Text fontWeight="semibold" color="#04111d">
                  Quantity
                </Text>
                <NumberField
                  onChange={(val) => {
                    setQuantity(val);
                  }}
                  maxWidth="100%"
                  max={product.stock}
                />
                <Text>{product.stock - quantity} stock available</Text>
              </Box>
            </VStack>
            <Button
              colorScheme="teal"
              size="lg"
              w="100%"
              mt="5"
              onClick={addToCart}
              disabled={product.stock - quantity < 0 ? true : false}>
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
