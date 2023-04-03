import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

const NumberField = ({ onChange, max, maxWidth }) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step: 1,
      defaultValue: 1,
      min: 1,
      max: max,
      onChange: onChange,
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW={maxWidth} py={4}>
      <Button {...inc}>+</Button>
      <Input textAlign="center" {...input} />
      <Button {...dec}>-</Button>
    </HStack>
  );
};

export default NumberField;
