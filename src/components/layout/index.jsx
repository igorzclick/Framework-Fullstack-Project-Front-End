import React from 'react';
import { useColorModeValue } from '../ui/color-mode';

import {
  Box,
  VStack,
  HStack,
  Text,
  Icon,
  Button,
  Flex,
} from '@chakra-ui/react';
import {
  AiOutlineDashboard,
  AiOutlineAppstore,
  AiOutlineShoppingCart,
  AiOutlineSetting,
  AiOutlineLogout,
} from 'react-icons/ai';
import { useNavigate } from 'react-router';

const navItems = [
  { label: 'Gerenciamento', icon: AiOutlineAppstore, key: 'dashboard' },
  { label: 'Produtos', icon: AiOutlineShoppingCart, key: 'products' },
  { label: 'Vendas', icon: AiOutlineShoppingCart, key: 'sales' },
  { label: 'Configurações', icon: AiOutlineSetting, key: 'settings' },
];

export const Layout = ({ activeKey = 'dashboard', children }) => {
  const bg = useColorModeValue('white', 'gray.900');
  const activeBg = useColorModeValue('blue.100', 'blue.700');
  const activeColor = useColorModeValue('blue.600', 'blue.300');
  const navigate = useNavigate();

  return (
    <Box display='flex' minH='100vh'>
      <Box
        as='nav'
        position='fixed'
        left={0}
        top={0}
        h='100vh'
        w='260px'
        bg={bg}
        shadow='md'
        p={6}
        display='flex'
        flexDirection='column'
        justifyContent='space-between'>
        {/* Logo */}
        <Box
          my={6}
          // colocar um icone de usuario aqui
          borderBottom='1px solid'
          borderColor={useColorModeValue('gray.200', 'gray.700')}>
          <HStack spacing={3}>
            <Box
              w={8}
              h={8}
              bg='blue.600'
              borderRadius='md'
              display='flex'
              alignItems='center'
              justifyContent='center'
              color='white'
              fontWeight='bold'></Box>
            <Text>StockPro</Text>
          </HStack>
        </Box>

        {/* Navegação */}
        <VStack spacing={4} align='stretch' flex='1'>
          {navItems.map(({ label, icon, key }) => {
            const isActive = activeKey === key;
            return (
              <Flex
                key={key}
                align='center'
                p={3}
                borderRadius='md'
                cursor='pointer'
                bg={isActive ? activeBg : 'transparent'}
                color={isActive ? activeColor : 'inherit'}
                _hover={{
                  bg: isActive ? activeBg : 'gray.100',
                }}
                onClick={() => navigate(`/${key}`)}>
                <Icon as={icon} boxSize={5} mr={3} />
                <Text fontWeight={isActive ? 'semibold' : 'normal'}>
                  {label}
                </Text>
              </Flex>
            );
          })}
        </VStack>

        {/* <Divider my={6} /> */}

        {/* Área do usuário */}
        <Box>
          <Text fontSize='sm' color='gray.600' mb={1}>
            Mercado São José
          </Text>
          <Text fontSize='xs' color='gray.500' mb={3}>
            mercado@email.com
          </Text>
          <Button
            leftIcon={<AiOutlineLogout />}
            size='sm'
            colorScheme='red'
            variant='ghost'
            w='full'
            justifyContent='flex-start'>
            Sair
          </Button>
        </Box>
      </Box>

      <Box flex='1' ml='260px' bg='gray.50' p={6}>
        {children}
      </Box>
    </Box>
  );
};
