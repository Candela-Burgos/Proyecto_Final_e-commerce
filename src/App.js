import { Flex } from '@chakra-ui/react';
import { Product } from './components/Product/Product';
import { ProductDetail } from './components/Product/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ShopLayout } from './components/Layout/ShopLayout';
import { useState } from 'react';
import { Profile } from './pages/Profile/Profile';
import { Error404 } from './pages/404/Error404';

function App() {
  const [user, setUser] = useState('');

  return (
    <Flex
      w="100%"
      h="100%"
      minH="100vh"
      justify="center"
      alignItems="center"
      // mt="1.3em"
      bgGradient="linear(to-l,#121420, #35265c, #121420)"
    >
      <ShopLayout user={user} setUser={setUser}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          {/* <Route path="/profile" element={<Profile />} />
          <Route path="*" element={<Error404 />} /> */}
        </Routes>
      </ShopLayout>
    </Flex>
  );
}

export default App;
