import { HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { MdAttachMoney } from 'react-icons/md';

export const ProductFilterPrice = () => {
  return (
    <HStack
      as="form"
      display="flex"
      w="20%"
      justify="center"
      alignItems="center"
      className="productSearch"
    >
      <MdAttachMoney fontSize="3em" color="#fff" />
      <Input
        type="number"
        color="#fff"
        bgColor="#00000036"
        _focus={{ outline: 'none' }}
        placeholder="Choose a price..."
      />
    </HStack>
  );
};
