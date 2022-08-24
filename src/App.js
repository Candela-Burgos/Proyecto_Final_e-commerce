import { Flex } from '@chakra-ui/react';
import { Products } from './components/Product/Products';
import { ProductDetail } from './pages/ProductDetail/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ShopLayout } from './components/Layout/ShopLayout';
import { Profile } from './pages/Profile/Profile';
import { Error404 } from './pages/404/Error404';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { CartItem } from './components/Cart/CartItem';
import { Orders } from './pages/Orders/Orders';

function App() {
  // icono de joystick BiJoystick

  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://img.freepik.com/vector-gratis/fondo-galaxia-acuarela_23-2149227639.jpg?w=1380&t=st=1661112521~exp=1661113121~hmac=39c9f43d9494fd7aaf9efe7a68196d528f7c80b0ae0955dda2a233cec42e514a')"
      bgRepeat="round"
      bgSize="100%"
    >
      <ShopLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product-detail/:id" element={<ProductDetail />} />
          <Route path="/cart" element={<CartItem />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
            <Route path="/orders" element={<Orders />} />
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </ShopLayout>
    </Flex>
  );
}

export default App;
