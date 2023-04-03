import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

const NumberField = () => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: 6,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="250px" py={4}>
      <Button {...inc}>+</Button>
      <Input textAlign="center" {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export default NumberField;
