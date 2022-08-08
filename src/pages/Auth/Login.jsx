import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { useForm } from 'react-hook-form';

const Login = ({ user, setUser }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  //   {
  // //   defaultValues: {
  // //     email: '',
  // //     password: '',
  //   },
  // }

  const enviarForm = (data) => console.log(data);

  console.log(errors);

  return (
    <VStack as="form" onSubmit={handleSubmit(enviarForm)}>
      {/* <FormControl>
        <FormLabel htmlFor="login-email">Email</FormLabel>
        <Input
          id="login-email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: true,
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="login-password">Password</FormLabel>
        <Input
          id="login-password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: true,
          })}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}
      </FormControl> */}

      <FormControl isInvalid={errors.email} isRequired>
        <FormLabel htmlFor="login-email">Email</FormLabel>
        <Input
          id="login-email"
          type="email"
          placeholder="Email"
          {...register('email', {
            required: 'This field is required',
          })}
        />
        {errors.email && (
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        )}
      </FormControl>
      <FormControl isInvalid={errors.password} isRequired>
        <FormLabel htmlFor="login-password">Password</FormLabel>
        <Input
          id="login-password"
          type="password"
          placeholder="Password"
          {...register('password', {
            required: 'This field is required',
          })}
        />
        {errors.password && (
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        )}
      </FormControl>
      <Input type="submit" value="Send" />
    </VStack>
  );
};

export { Login };
