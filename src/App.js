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
  return (
    <Flex
      w="100%"
      justifyContent="center"
      alignItems="center"
      bgImage="url('https://img.freepik.com/vector-gratis/fondo-galaxia-acuarela_52683-79849.jpg?w=1380&t=st=1662146670~exp=1662147270~hmac=d738b61dc8aefd0eb08bced0e931f7b36886df3610803a74e6381e587481f5a0')"
      bgSize="100%"
      bgRepeat="round"
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
