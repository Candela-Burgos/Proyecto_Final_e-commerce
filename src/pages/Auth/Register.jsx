import { FormControl, FormLabel, Input, VStack } from '@chakra-ui/react';
import React from 'react';

const Register = () => {
  return (
    <VStack as="form">
      <FormControl isRequired>
        <FormLabel>Name</FormLabel>
        <Input type="text" placeholder="Name" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email</FormLabel>
        <Input type="email" placeholder="Email" />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" />
      </FormControl>
      <Input type="submit" value="Send" />
    </VStack>
  );
};

export { Register };
