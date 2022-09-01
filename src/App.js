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
import { ModalLogin } from './components/Auth/Modal';

function App() {
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://img.freepik.com/vector-gratis/fondo-galaxia-estrellas-planetas-realistas_23-2148964716.jpg?w=1380&t=st=1661869403~exp=1661870003~hmac=21d419d567bfa119f77196c20aa96cd1972459f55f378c277955fbeba2f82a3f')"
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
