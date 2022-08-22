import { Flex } from '@chakra-ui/react';
import { Products } from './components/Product/Products';
import { ProductDetail } from './components/Product/ProductDetail';
import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home/Home';
import { ShopLayout } from './components/Layout/ShopLayout';
import { Profile } from './pages/Profile/Profile';
import { Error404 } from './pages/404/Error404';
import { ProtectedRoute } from './components/ProtectedRoute/ProtectedRoute';
import { CartItem } from './components/Cart/CartItem';

function App() {
  // icono de joystick BiJoystick

  return (
    <Flex
      w="100%"
      // h="100vh"
      justifyContent="center"
      alignItems="center"
      // bgGradient="linear(to-l,#121420, #35265c, #121420)"
      // bgGradient="linear(to-l, gray.900, purple.900, gray.900)"
      // bgImage="url('https://img.freepik.com/vector-gratis/patron-espacio-transparente-color_102902-2360.jpg?w=1060&t=st=1661045483~exp=1661046083~hmac=a175dafa855f981cc758df05dff58e7b6e2e06b0cd0b090f44af380bbb5abe46')"
      // bgImage="url('https://img.freepik.com/foto-gratis/fondo-galaxia-purpura_1017-3748.jpg?w=1380&t=st=1661045948~exp=1661046548~hmac=93890792ed9cd11bb154e938e549dbb4b7cc19c611ec7577824cccee86380e1c')"

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
          </Route>

          <Route path="*" element={<Error404 />} />
        </Routes>
      </ShopLayout>
    </Flex>
  );
}

export default App;
