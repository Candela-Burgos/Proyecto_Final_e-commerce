import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Toast,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../Hook/Zustand/useAuth';

const Login = () => {
  const toast = useToast();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login, auth } = useAuth();

  const enviarForm = async ({ email, password }) => {
    const response = await fetch('http://localhost:1337/api/auth/local', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ identifier: email, password }),
    });
    const data = await response.json();
    if (!data.user) {
      throw new Error('error');
    }
    login(data);
  };

  console.log(auth);

  return (
    <VStack as="form" onSubmit={handleSubmit(enviarForm)} pb="1em" gap="5">
      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel htmlFor="email">Email</FormLabel>
        <Input
          id="email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'This field is required',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'This field is required',
            },
          })}
        />
        <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel htmlFor="password">Password</FormLabel>
        <Input
          id="password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'This field is required',
            minLength: {
              value: 8,
              message: 'At least 8 characters',
            },
          })}
        />
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Input type="submit" value="Send" />
    </VStack>
  );
};

export { Login };
