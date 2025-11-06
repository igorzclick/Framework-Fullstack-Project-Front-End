// src/components/Cart.jsx
import React from 'react';
import { useAtom } from 'jotai';
import {
  Box,
  Button,
  Flex,
  Heading,
  Text,
  VStack,
  HStack,
} from '@chakra-ui/react';
import { cartAtom } from '../../states/cart.states';

const QuantityControl = ({ quantity, onDecrement, onIncrement }) => (
  <HStack>
    <Button size='sm' onClick={onDecrement} disabled={quantity === 0}>
      -
    </Button>
    <Text>{quantity}</Text>
    <Button size='sm' onClick={onIncrement}>
      +
    </Button>
  </HStack>
);

const CartItem = ({ product, onChangeQuantity }) => {
  const handleIncrement = () =>
    onChangeQuantity(product.id, product.quantity + 1);
  const handleDecrement = () =>
    onChangeQuantity(product.id, Math.max(product.quantity - 1, 0));

  return (
    <Flex
      justify='space-between'
      align='center'
      borderWidth='1px'
      borderRadius='lg'
      p={4}
      w='100%'>
      <Text fontWeight='bold'>{product.name}</Text>
      <QuantityControl
        quantity={product.quantity}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
      />
    </Flex>
  );
};

export const Cart = () => {
  const [products, setProducts] = useAtom(cartAtom);

  const handleQuantityChange = (id, newQuantity) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, quantity: newQuantity } : p))
    );
  };

  const total = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <Box>
      <Heading size='md' mb={4}>
        Seu Carrinho
      </Heading>
      <VStack spacing={4} align='stretch'>
        {products.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            onChangeQuantity={handleQuantityChange}
          />
        ))}
      </VStack>
      <Flex justify='space-between' fontWeight='bold'>
        <Text>Total de Itens:</Text>
        <Text>{total}</Text>
      </Flex>
      <Button mt={4} colorScheme='blue' w='full'>
        Finalizar Compra
      </Button>
    </Box>
  );
};
