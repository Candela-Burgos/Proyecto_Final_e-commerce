import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  useToast,
  VStack,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { login } from '../../Redux/slice/authSlice';
import { onCloseModal } from '../../Redux/slice/openModalSlice';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const toast = useToast();
  const dispatch = useDispatch();

  const enviarForm = async ({ username, email, password }) => {
    const response = await fetch(
      'http://localhost:1337/api/auth/local/register',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username,
          email,
          password,
        }),
      }
    );
    const data = await response.json();
    if (!data.user) {
      throw new Error(
        toast({
          title: 'An error ocurred',
          description: 'The information is invalid',
          status: 'error',
          duration: 3000,
          isClosable: true,
        })
      );
    }
    dispatch(login(data));
    dispatch(onCloseModal());
    toast({
      title: `Welcome ${username}!`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <VStack as="form" onSubmit={handleSubmit(enviarForm)} pb="1em" gap="5">
      <FormControl isInvalid={errors.username} isRequired>
        <FormLabel htmlFor="username">Username</FormLabel>
        <Input
          id="username"
          type="text"
          placeholder="Username"
          {...register('username', {
            required: 'This field is required',
          })}
        />
        <FormErrorMessage>{errors.username?.message}</FormErrorMessage>
      </FormControl>
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
        <InputGroup>
          <Input
            id="password"
            type={show ? 'text' : 'password'}
            placeholder="Password"
            {...register('password', {
              required: 'This field is required',
              minLength: {
                value: 8,
                message: 'At least 8 characters',
              },
            })}
          />
          <InputRightElement onClick={handleClick}>
            {show ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </InputRightElement>
        </InputGroup>
        <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
      </FormControl>
      <Input type="submit" value="Send" />
    </VStack>
  );
};

export { Register };
