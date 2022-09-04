import { Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

export const Profile = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <Flex
      w="100%"
      h="100vh"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
    >
      <Flex
        w={['100%', '80%', '80%', '80%', '80%', '80%']}
        h="80%"
        justifyContent="space-evenly"
        alignItems={[
          'center',
          'flex-start',
          'flex-start',
          'flex-start',
          'flex-start',
          'flex-start',
        ]}
        flexDirection="column"
      >
        <Heading
          color="#fff"
          my="1em"
          fontSize={['2em', '2em', '2em', '2.5em', '3em', '3em']}
        >
          My profile
        </Heading>
        <Flex
          w="80%"
          justifyContent={[
            'center',
            'flex-start',
            'flex-start',
            'flex-start',
            'flex-start',
            'flex-start',
          ]}
          alignItems="flex-end"
          flexDirection="row"
        >
          <Image
            src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
            alt={user.username}
            w={['150px', '150px', '200px', '250px', '250px', '250px']}
          />
          <Flex
            w="100%"
            justifyContent="center"
            alignItems="space-between"
            flexDirection="column"
            ml="1em"
          >
            <Text
              color="#fff"
              mb="1em"
              fontSize={['.9em', '1em', '1em', '1em', '1.3em', '1.3em']}
            >
              <strong>Username:</strong> {user.username}
            </Text>
            <Text
              color="#fff"
              fontSize={['.9em', '1em', '1em', '1em', '1.3em', '1.3em']}
            >
              <strong>Email:</strong> {user.email}
            </Text>
          </Flex>
        </Flex>
        <Flex
          w={['80%', '50%', '50%', '50%', '50%', '50%']}
          justifyContent={[
            'center',
            'flex-start',
            'flex-start',
            'flex-start',
            'flex-start',
            'flex-start',
          ]}
          alignItems="flex-end"
          flexDirection="row"
          gap={5}
        >
          <Link as={NavLink} to="/cart">
            <Button>Go to my cart</Button>
          </Link>
          <Link as={NavLink} to="/orders">
            <Button colorScheme="purple">My orders</Button>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};
