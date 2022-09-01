import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Text,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useParams } from 'react-router-dom';
import { GrFormPreviousLink } from 'react-icons/gr';
import { addToCart } from '../../Redux/slice/cartSlice';

const ProductDetail = () => {
  const [detail, setDetail] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const toast = useToast();
  const cart = useSelector((state) => state.cart);

  const maxStock = () => {
    const findProduct = cart.cartItems.find(
      (cartItem) => cartItem.data.id === Number(id)
    );
    return (
      findProduct && findProduct.cartQuantity >= detail.data.attributes.stock
    );
  };

  const handleAddToCart = (detail) => {
    dispatch(addToCart(detail));
    toast({
      title: `${detail.data.attributes.title} added to cart.`,
      status: 'success',
      duration: 3000,
      isClosable: true,
    });
  };

  useEffect(() => {
    fetch(`http://localhost:1337/api/products/${id}?populate=image`)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [id]);

  return (
    <Flex
      w="90%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      wrap="wrap"
    >
      {detail && (
        <Box
          key={detail.id}
          display="flex"
          w={['90%', '90%', '90%', '80%', '70%', '70%']}
          h="auto"
          justifyContent="space-evenly"
          alignItems="center"
          flexDirection={['column', 'column', 'row']}
          bgColor="#00000036"
          borderRadius="5px"
          boxShadow="-1px 1px 55px 2px rgba(0,0,0,0.44) inset"
        >
          <Image
            src={detail.data.attributes.image.data.attributes.url}
            alt={detail.data.attributes.title}
            w={[150, 200, 200, 200, 'auto', 'auto']}
          />
          <Box
            display="flex"
            w={['90%', '90%', '50%', '50%', '50%', '50%']}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            mb={['2em', '2em', '2em', '2em', 0, 0]}
          >
            <Heading color="#fff" textAlign="center" my="1em">
              {detail.data.attributes.title}
            </Heading>
            <Text color="#fff" textAlign="center">
              {detail.data.attributes.description}
            </Text>
            <Text color="#fbb13c" my="1em" textAlign="center">
              ${detail.data.attributes.price}
            </Text>
            <Flex justifyContent="center" alignItems="center" gap={5}>
              <Link as={NavLink} to="/products">
                <Button>
                  <GrFormPreviousLink fontSize="2em" color="#35258c" />
                </Button>
              </Link>
              <Button
                isDisabled={maxStock()}
                onClick={() => handleAddToCart(detail)}
              >
                Add to cart
              </Button>
            </Flex>
          </Box>
        </Box>
      )}
    </Flex>
  );
};

export { ProductDetail };
