import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://strapiecommerce-production-b5fc.up.railway.app/api/products/${id}?populate=image`
    )
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  return (
    <Flex
      w="90%"
      h="100%"
      justify="center"
      alignItems="center"
      wrap="wrap"
      gap={10}
      mt="8em"
    >
      {detail && (
        <Box
          key={detail.id}
          display="flex"
          w="70%"
          h="auto"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection="row"
          bgColor="#00000036"
          borderRadius="5px"
        >
          <Image
            src={detail.data.attributes.image.data.attributes.url}
            alt={detail.data.attributes.title}
          />
          <Box
            display="flex"
            w="50%"
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
          >
            <Heading color="#fff">{detail.data.attributes.title}</Heading>
            <Text color="#fff" textAlign="center">
              {detail.data.attributes.description}
            </Text>
            <Text color="#fbb13c" my="1em">
              ${detail.data.attributes.price}
            </Text>
            <Link to={`/productDetail/${detail.id}`}>
              <Button>Add to cart</Button>
            </Link>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export { ProductDetail };
