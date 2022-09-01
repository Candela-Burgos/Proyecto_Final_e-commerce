import { HStack, Input, Select } from '@chakra-ui/react';
import React from 'react';
import { BiCategoryAlt } from 'react-icons/bi';

export const ProductFilter = ({ setCategories }) => {
  return (
    <HStack
      as="form"
      display="flex"
      w={['80%', '80%', '40%', '40%', '20%', '20%']}
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
        defaultValue=""
      >
        <option style={{ backgroundColor: '#35258c' }} value="" disabled>
          Choose a category...
        </option>
        <option style={{ backgroundColor: '#35258c' }} value="Action">
          Action
        </option>
        <option style={{ backgroundColor: '#35258c' }} value="Battle Royale">
          Battle Royale
        </option>
        <option style={{ backgroundColor: '#35258c' }} value="Open World">
          Open World
        </option>
        <option style={{ backgroundColor: '#35258c' }} value="Party">
          Party
        </option>
        <option style={{ backgroundColor: '#35258c' }} value="Simulator">
          Simulator
        </option>
      </Select>
    </HStack>
  );
};
