import {
  HStack,
  Input,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Text,
  useRangeSlider,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { MdAttachMoney } from 'react-icons/md';

export const ProductFilterPrice = ({ setMinPrice, setMaxPrice }) => {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(600);

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
      <Text color="white">{min}</Text>
      <RangeSlider
        aria-label={['min', 'max']}
        defaultValue={[0, 600]}
        max={600}
        step="10"
        colorScheme="purple"
        onChangeEnd={(value) => {
          setMin(value[0]);
          setMax(value[1]);
        }}
        onChange={(value) => {
          setMinPrice(value[0]);
          setMaxPrice(value[1]);
        }}
      >
        <RangeSliderTrack>
          <RangeSliderFilledTrack />
        </RangeSliderTrack>
        <RangeSliderThumb index={0} />
        <RangeSliderThumb index={1} />
      </RangeSlider>
      <Text color="white">{max}</Text>
    </HStack>
  );
};
