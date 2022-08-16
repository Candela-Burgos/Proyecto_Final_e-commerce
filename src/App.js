import { Flex } from '@chakra-ui/react';
import { Products } from './components/Product/Products';
import { ProductDetail } from './components/Product/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ShopLayout } from './components/Layout/ShopLayout';
import { Profile } from './pages/Profile/Profile';
import { Error404 } from './pages/404/Error404';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';

function App() {
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
      <ShopLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </ShopLayout>
    </Flex>
  );
}

export default App;
