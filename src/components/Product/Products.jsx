import React, { useEffect, useState } from 'react';
import { Box, Button, Flex, Image, Spinner, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ProductSeach } from './ProductSearch';
import { ProductFilter } from './ProductFilter';
import { ProductFilterPrice } from './ProductFilterPrice';
import { GrFormNextLink, GrFormPreviousLink } from 'react-icons/gr';
import { useGet } from '../../Hook/useGet';

const Products = () => {
  const {
    products,
    isLoading,
    page,
    setPage,
    setTitle,
    setCategories,
    setMinPrice,
    setMaxPrice,
  } = useGet();

  return (
    <>
      <Flex
        w="100%"
        h="auto"
        justifyContent={[
          'space-around',
          'space-around',
          'space-around',
          'space-around',
          'center',
          'center',
        ]}
        alignItems="center"
        flexDirection={['column', 'column', 'row', 'row', 'row', 'row']}
        gap={10}
        my="3em"
      >
        <ProductSeach setTitle={setTitle} />
        <ProductFilter setCategories={setCategories} />
        <ProductFilterPrice
          setMinPrice={setMinPrice}
          setMaxPrice={setMaxPrice}
        />
      </Flex>
      {isLoading && (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
      {products && !products.length && (
        <Flex w="100%" h="50vh" justifyContent="center" alignItems="center">
          <Text color="#fff" fontSize="1.3em">
            There are no products matching your search
          </Text>
        </Flex>
      )}
      {products &&
        products.map((product) => (
          <Link key={product.id} to={`/product-detail/${product.id}`}>
            <Flex
              w={[200, 200, 200, 200, 280, 280]}
              h="auto"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              bgColor="#00000036"
              borderRadius="30px"
              transition="all .5s ease-out"
              _hover={{
                transform: 'scale(1.06)',
              }}
              boxShadow="-1px 1px 55px 2px rgba(0,0,0,0.88) inset"
            >
              <Image
                src={product.attributes.image.data.attributes.url}
                alt={product.attributes.title}
                borderRadius="30px"
              />
              <Box
                display="flex"
                w="100%"
                justifyContent="space-around"
                alignItems="center"
              >
                <Text color="#fff" my="1em">
                  {product.attributes.title}
                </Text>
                <Text color="#fbb13c" my="1em">
                  ${product.attributes.price}
                </Text>
              </Box>
            </Flex>
          </Link>
        ))}
      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        w="100%"
        gap={3}
        h="100px"
      >
        <Button
          bgColor="#fff"
          disabled={page === 0 && 'disable'}
          onClick={() => setPage(page - 7)}
        >
          <GrFormPreviousLink fontSize="2em" color="#35258c" />
        </Button>
        <Box
          w="75px"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Text
            color="#000"
            border="1px solid #fff"
            p="5px 10px"
            bgColor="#fff"
          >
            {page}
          </Text>
          <Text
            color="#000"
            border="1px solid #fff"
            p="5px 10px"
            bgColor="#fff"
          >
            21
          </Text>
        </Box>
        <Button
          bgColor="#fff"
          isDisabled={products.length < 7}
          onClick={() => setPage(page + 7)}
        >
          <GrFormNextLink fontSize="2em" color="#35258c" />
        </Button>
      </Box>
    </>
  );
};

export { Products };
