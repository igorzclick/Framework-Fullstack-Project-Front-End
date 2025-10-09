import React from "react";
import { Box, Button, Center, Flex, Heading, Image, Stack, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router";
import logo from "../../assets/logo.png";
export const HomeView = () => {
  const navigate = useNavigate();

  return (
    <Box w="100%" minH="100vh" bgGradient="linear(to-b, white, blue.50)">
      {/* Header */}
      <Flex justify="space-between" align="center" px={8} py={4}>
        <Flex align="center">
          <Image src={logo} alt="Logo" boxSize="30px" mr={2} />
          <Text fontWeight="bold" fontSize="xl">StockPro</Text>
        </Flex>
        <Flex gap={4}>
          <Button variant="ghost" onClick={() => navigate("/login")}>Entrar</Button>
          <Button colorScheme="blue" onClick={() => navigate("/register")}>Cadastrar-se</Button>
        </Flex>
      </Flex>

      {/* Main Content */}
      <Center mt={20} px={4}>
        <Stack spacing={6} align="center" textAlign="center" maxW="600px">
          <Heading as="h1" size="2xl">
            Gestão de Estoque <Text as="span" color="blue.500">Inteligente</Text>
          </Heading>
          <Text fontSize="lg" color="gray.600">
            Sistema completo para gerenciar seu mini mercado com segurança, controle de vendas e estoque em tempo real.
          </Text>
          <Flex gap={4}>
            <Button colorScheme="blue" onClick={() => navigate("/dashboard")}>
              Começar Agora
            </Button>
            <Button variant="outline" onClick={() => navigate("/demo")}>
              Ver Demo
            </Button>
          </Flex>
        </Stack>
      </Center>
    </Box>
  );
};
