import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Flex,
  Text,
  Heading,
  Button,
  Badge,
  Input,
  Stack,
  HStack,
  IconButton,
  Image,
  Icon,
} from "@chakra-ui/react";
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiEye } from "react-icons/fi";

export const ListProductsview = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Dados mockados - substituir por chamada à API
  const products = [
    {
      id: "PROD-001",
      sellerId: "VENDEDOR-123",
      name: "Camiseta Branca",
      price: 79.9,
      quantity: 25,
      image:
        "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=400&q=80",
      status: "ativo",
    },
    {
      id: "PROD-002",
      sellerId: "VENDEDOR-456",
      name: "Tênis Esportivo",
      price: 249.99,
      quantity: 10,
      image:
        "https://img.irroba.com.br/fit-in/600x600/filters:fill(fff):quality(80)/dmdamand/catalog/1500/thumbnail-co-12.jpg",
      status: "inativo",
    },
    {
      id: "PROD-003",
      sellerId: "VENDEDOR-789",
      name: "Jaqueta Jeans",
      price: 199.5,
      quantity: 5,
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZZJv3TJRqwLNlaJAZ9qNu4_ANX1TfukpirQ&s",
      status: "ativo",
    },
  ];

  const filteredProducts = products.filter(
    (p) =>
      p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      p.sellerId.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const getStatusColor = (status) => {
    const statusLower = status?.toLowerCase();
    switch (statusLower) {
      case "ativo":
        return "green";
      case "inativo":
        return "red";
      default:
        return "gray";
    }
  };

  const totalProducts = products.length;
  const activeProducts = products.filter((p) => p.status === "ativo").length;
  const totalStock = products.reduce((sum, p) => sum + p.quantity, 0);

  return (
    <Box p={6} bg="white" rounded="md" shadow="md">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="lg" fontWeight="bold" mb={2}>
            Produtos
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Gerencie seus produtos e estoque
          </Text>
        </Box>
        <Flex gap={2}>
          <Button size="sm" variant="outline" onClick={() => navigate("/sales")}>
            Vendas
          </Button>
          <Button size="sm" variant="outline">
            Produtos
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<FiPlus />}
            onClick={() => navigate("/products/new")}
          >
            Novo Produto
          </Button>
        </Flex>
      </Flex>

      {/* Resumo */}
      <Flex gap={6} wrap="wrap" mb={6}>
        <Box flex="1" minW="200px" borderWidth="1px" borderRadius="md" p={4} bg="blue.50">
          <Text fontSize="sm" color="gray.600" mb={1}>
            Total de Produtos
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            {totalProducts}
          </Text>
        </Box>
        <Box flex="1" minW="200px" borderWidth="1px" borderRadius="md" p={4} bg="green.50">
          <Text fontSize="sm" color="gray.600" mb={1}>
            Produtos Ativos
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.600">
            {activeProducts}
          </Text>
        </Box>
        <Box flex="1" minW="200px" borderWidth="1px" borderRadius="md" p={4} bg="purple.50">
          <Text fontSize="sm" color="gray.600" mb={1}>
            Total em Estoque
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="purple.600">
            {totalStock}
          </Text>
        </Box>
      </Flex>

      {/* Filtro e Busca */}
      <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={4}>
        <HStack spacing={2} maxW="400px" flex="1">
          <Box color="gray.500">
            <FiSearch />
          </Box>
          <Input
            placeholder="Buscar por nome, ID ou vendedor..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            flex="1"
          />
        </HStack>
      </Flex>

      {/* Tabela */}
      <Box borderWidth="1px" borderRadius="md" overflow="hidden" mb={4}>
        <Flex
          bg="gray.50"
          p={4}
          borderBottomWidth="1px"
          fontWeight="semibold"
          fontSize="sm"
          color="gray.700"
        >
          <Box flex="1">Imagem</Box>
          <Box flex="2">Produto</Box>
          <Box flex="1">Preço</Box>
          <Box flex="1">Quantidade</Box>
          <Box flex="1">Vendedor</Box>
          <Box flex="1" textAlign="center">
            Status
          </Box>
          <Box flex="1" textAlign="center">
            Ações
          </Box>
        </Flex>

        {filteredProducts.length === 0 ? (
          <Box p={8} textAlign="center">
            <Text color="gray.500">Nenhum produto encontrado</Text>
          </Box>
        ) : (
          <Stack spacing={0} divider={<Box borderTopWidth="1px" />}>
            {filteredProducts.map((p) => (
              <Flex
                key={p.id}
                p={4}
                align="center"
                _hover={{ bg: "gray.50" }}
                transition="background 0.2s"
              >
                <Box flex="1">
                  <Image
                    src={p.image}
                    alt={p.name}
                    boxSize="50px"
                    objectFit="cover"
                    borderRadius="md"
                  />
                </Box>
                <Box flex="2" fontWeight="semibold">
                  {p.name}
                </Box>
                <Box flex="1">{formatCurrency(p.price)}</Box>
                <Box flex="1">{p.quantity}</Box>
                <Box flex="1">{p.sellerId}</Box>
                <Box flex="1" textAlign="center">
                  <Badge colorScheme={getStatusColor(p.status)}>{p.status}</Badge>
                </Box>
                <Box flex="1" textAlign="center">
                  <HStack spacing={2} justify="center">
                    <IconButton
                      size="sm"
                      variant="ghost"
                      aria-label="Ver detalhes"
                      onClick={() => navigate(`/products/${p.id}`)}
                      colorScheme="gray"
                    >
                      <Icon as={FiEye} boxSize={4} />
                    </IconButton>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      aria-label="Editar"
                      colorScheme="blue"
                      onClick={() => navigate(`/products/edit/${p.id}`)}
                    >
                      <Icon as={FiEdit} boxSize={4} />
                    </IconButton>
                    <IconButton
                      size="sm"
                      variant="ghost"
                      aria-label="Excluir"
                      colorScheme="red"
                      onClick={() => {
                        if (window.confirm(`Deseja realmente excluir ${p.name}?`)) {
                          // Aqui vai a chamada à API para excluir
                          console.log("Excluir produto:", p.id);
                        }
                      }}
                    >
                      <Icon as={FiTrash2} boxSize={4} />
                    </IconButton>
                  </HStack>
                </Box>
              </Flex>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
};
