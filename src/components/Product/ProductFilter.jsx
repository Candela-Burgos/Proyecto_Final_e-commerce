import { HStack, Input, Select } from '@chakra-ui/react';
import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';

export const ProductFilter = ({ setCategories }) => {
  return (
    <HStack
      as="form"
      display="flex"
      w="20%"
      justify="center"
      alignItems="center"
      className="productSearch"
    >
      <BiCategoryAlt fontSize="3em" color="#fff" />
      <Select
        type="text"
        color="#fff"
        bgColor="#00000036"
        _focus={{ outline: 'none' }}
        onChange={(e) => setCategories(e.target.value)}
      >
        <option style={{ backgroundColor: '#35258c' }} disabled selected>
          Choose a category...
        </option>
        <option style={{ backgroundColor: '#35258c' }}>Action</option>
        <option style={{ backgroundColor: '#35258c' }}>Battle Royale</option>
        <option style={{ backgroundColor: '#35258c' }}>Open World</option>
        <option style={{ backgroundColor: '#35258c' }}>Party</option>
        <option style={{ backgroundColor: '#35258c' }}>Simulator</option>
      </Select>
    </HStack>
  );
};
