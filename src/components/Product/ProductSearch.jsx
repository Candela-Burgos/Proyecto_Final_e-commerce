import { HStack, Input } from '@chakra-ui/react';
import React from 'react';
import { BiSearchAlt } from 'react-icons/bi';

export const ProductSeach = ({ setTitle }) => {
  return (
    <HStack
      as="form"
      display="flex"
      w="20%"
      justify="center"
      alignItems="center"
      className="productSearch"
    >
      <BiSearchAlt fontSize="3em" color="#fff" />
      <Input
        type="text"
        color="#fff"
        bgColor="#00000036"
        _focus={{ outline: 'none' }}
        placeholder="Search your favorite game..."
        onChange={(e) => setTitle(e.target.value)}
      />
    </HStack>
  );
};
