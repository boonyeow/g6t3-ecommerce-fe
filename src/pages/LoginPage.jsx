import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import { PasswordField } from "../components/Login/PasswordField";
const LoginPage = () => {
  return (
    <Box h="calc(100vh - 100px)" p="24">
      <Container
        maxW="xl"
        py={{
          base: "12",
          md: "16",
        }}
        px={{
          base: "0",
          sm: "8",
          md: "16",
        }}>
        <Stack spacing="8">
          <Stack spacing="6">
            <Stack
              spacing={{
                base: "2",
                md: "3",
              }}>
              <Heading textAlign={"left"} size={"2xl"}>
                LOGIN
              </Heading>
              <HStack spacing="1">
                <Text color="muted">Don't have an account?</Text>
                <Button variant="link" colorScheme="blue">
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </Stack>
          <Box>
            <Stack spacing="6">
              <Stack spacing="5">
                <FormControl>
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <Input id="email" type="email" />
                </FormControl>
                <PasswordField />
              </Stack>
              <Stack spacing="6">
                <Button colorScheme="teal">Sign in</Button>
              </Stack>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default LoginPage;
