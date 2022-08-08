import React, { useEffect, useState } from 'react';
import { Box, Flex, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { ProductSeach } from './ProductSearch';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      'https://strapiecommerce-production-b5fc.up.railway.app/api/products?populate=image'
    )
      .then((res) => res.json())
      .then((data) => setProducts(data.data));
  }, []);

  return (
    <Flex
      w="90%"
      h="100%"
      justify="center"
      alignItems="center"
      wrap="wrap"
      gap={10}
      mt="8em"
      mb="13em"
    >
      {/* {
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      } */}
      <Box
        display="flex"
        w="100%"
        h="auto"
        justifyContent="center"
        alignItems="center"
        className="boxProduct"
      >
        <ProductSeach />
      </Box>
      {products &&
        products.map((product) => (
          <Link key={products.id} to={`/product-detail/${product.id}`}>
            <Box
              display="flex"
              w="280px"
              h="auto"
              // maxH="800px"
              // minH="700px"
              justifyContent="center"
              alignItems="center"
              flexDirection="column"
              bgColor="#00000036"
              borderRadius="5px"
              transition="all .5s ease-out"
              _hover={{
                transform: 'scale(1.06)',
              }}
            >
              <Image
                src={product.attributes.image.data.attributes.url}
                alt={product.attributes.title}
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
            </Box>
          </Link>
        ))}
    </Flex>
  );
};

export { Product };
