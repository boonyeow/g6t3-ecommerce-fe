import {
  Box,
  Button,
  Checkbox,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import NumberField from "../components/NumberField";

const CartPage = () => {
  const [checkedItems, setCheckedItems] = useState([false, false]);

  const allChecked = checkedItems.every(Boolean);
  const isIndeterminate = checkedItems.some(Boolean) && !allChecked;

  console.log(allChecked, isIndeterminate);
  const cartItems = [
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
    <Box w="100%">
      <Flex minW="6xl" m="auto" mt="24" p="25" justifyContent="center">
        <Box>
          <Heading>Shopping Cart</Heading>
          <Box width="100%">
            <Checkbox
              isChecked={allChecked}
              isIndeterminate={isIndeterminate}
              onChange={(e) =>
                setCheckedItems([e.target.checked, e.target.checked])
              }>
              Select All Items
            </Checkbox>

            <VStack alignSelf={"start"} spacing="5">
              {cartItems.map((item, idx) => {
                return (
                  <HStack
                    bgColor="white"
                    borderRadius="24px"
                    overflow="hidden"
                    px="12"
                    spacing="16">
                    <Box>
                      <Checkbox
                        isChecked={checkedItems[idx]}
                        onChange={(e) => {
                          let temp = [...checkedItems];
                          temp[idx] = e.target.checked;
                          setCheckedItems(temp);
                        }}></Checkbox>
                    </Box>

                    <Box p="5">
                      <Image src={item.image_url} h="100px" w="100px"></Image>
                    </Box>
                    <Box>
                      <Text fontSize="2xl" fontWeight="bold">
                        {item.name}
                      </Text>
                      <Flex>
                        Sold by&nbsp;
                        <Text fontWeight="semibold" color="blue.500">
                          {item.seller}
                        </Text>
                      </Flex>
                    </Box>
                    <NumberField />
                    <Box textAlign={"center"}>
                      <Text>Subtotal</Text>
                      <Text fontWeight="semibold">{`$${item.price}`}</Text>
                    </Box>
                    <Button colorScheme="red">Remove</Button>
                  </HStack>
                );
              })}
            </VStack>
          </Box>

          <Flex direction="column">
            <Text fontWeight="bold" fontSize="xl">
              Order Summary
            </Text>
            <Box>
              <Text>{`TOTAL (${"1"} items) `}</Text>
              <Text fontWeight="bold">{`${"$10.00"}`}</Text>
            </Box>
            <Button colorScheme="teal" size="lg">
              Checkout
            </Button>
          </Flex>
        </Box>
        {/* <Box>
          <Button>Checkout</Button>
          <Heading>Order Summary</Heading>
        </Box> */}
      </Flex>
    </Box>
  );
};

export default CartPage;
