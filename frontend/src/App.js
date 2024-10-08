import { Flex } from "@chakra-ui/react";
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Footer from "./components/Footer";
import  Header from './components/Header';
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CartScreen from "./screens/CartScreen";


const App = () => {
  return (
   <BrowserRouter>
     <Header />
    <Flex
    as='main'
    mt='72px'
    direction='column'
    py='6'
    px='6'
    bgColor='gray.200'>
      <Routes>
        <Route path="/" element={<HomeScreen />}/>
        <Route path="/product/:id" element={<ProductScreen/>} />
        <Route path="/cart" element={<CartScreen/>} />
        <Route path="/cart/:id" element={<CartScreen/>}  />
      </Routes>
    </Flex>
    <Footer/>
   </BrowserRouter>
  )
};

export default App;