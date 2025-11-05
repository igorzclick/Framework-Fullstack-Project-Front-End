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
} from "@chakra-ui/react";
import { FiPlus, FiSearch, FiEdit, FiTrash2, FiEye } from "react-icons/fi";

export const SalesView = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  // Dados mockados - substituir por chamada à API
  const sales = [
    {
      id: "VEN-001",
      date: "2024-01-15",
      customer: "João Silva",
      total: 245.80,
      status: "concluída",
      items: 8,
    },
    {
      id: "VEN-002",
      date: "2024-01-15",
      customer: "Maria Santos",
      total: 189.50,
      status: "concluída",
      items: 5,
    },
    {
      id: "VEN-003",
      date: "2024-01-14",
      customer: "Pedro Costa",
      total: 320.00,
      status: "concluída",
      items: 12,
    },
    {
      id: "VEN-004",
      date: "2024-01-14",
      customer: "Ana Oliveira",
      total: 156.30,
      status: "cancelada",
      items: 4,
    },
    {
      id: "VEN-005",
      date: "2024-01-13",
      customer: "Carlos Souza",
      total: 478.90,
      status: "concluída",
      items: 15,
    },
  ];

  const filteredSales = sales.filter(
    (sale) =>
      sale.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
      sale.customer.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatCurrency = (value) => {
    return new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(value);
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("pt-BR");
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "concluída":
        return "green";
      case "cancelada":
        return "red";
      case "pendente":
        return "yellow";
      default:
        return "gray";
    }
  };

  const totalSales = sales.reduce((sum, sale) => sum + sale.total, 0);
  const completedSales = sales.filter((s) => s.status === "concluída").length;

  return (
    <Box p={6} bg="white" rounded="md" shadow="md" minH="100vh">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="lg" fontWeight="bold" mb={2}>
            Vendas
          </Heading>
          <Text color="gray.500" fontSize="sm">
            Gerencie todas as suas vendas
          </Text>
        </Box>
        <Flex gap={2}>
          <Button
            size="sm"
            variant="outline"
            onClick={() => navigate("/Products")}
          >
            Produtos
          </Button>
          <Button size="sm" variant="outline">
            Vendas
          </Button>
          <Button
            size="sm"
            colorScheme="blue"
            leftIcon={<FiPlus />}
            onClick={() => navigate("/sales/new")}
          >
            Nova Venda
          </Button>
        </Flex>
      </Flex>

      {/* Resumo */}
      <Flex gap={6} wrap="wrap" mb={6}>
        <Box
          flex="1"
          minW="200px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg="blue.50"
        >
          <Text fontSize="sm" color="gray.600" mb={1}>
            Total de Vendas
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="blue.600">
            {formatCurrency(totalSales)}
          </Text>
        </Box>
        <Box
          flex="1"
          minW="200px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg="green.50"
        >
          <Text fontSize="sm" color="gray.600" mb={1}>
            Vendas Concluídas
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="green.600">
            {completedSales}
          </Text>
        </Box>
        <Box
          flex="1"
          minW="200px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg="purple.50"
        >
          <Text fontSize="sm" color="gray.600" mb={1}>
            Total de Vendas
          </Text>
          <Text fontSize="2xl" fontWeight="bold" color="purple.600">
            {sales.length}
          </Text>
        </Box>
      </Flex>

      {/* Filtros e Busca */}
      <Flex justify="space-between" align="center" mb={4} wrap="wrap" gap={4}>
        <HStack spacing={2} maxW="400px" flex="1">
          <Box color="gray.500">
            <FiSearch />
          </Box>
          <Input
            placeholder="Buscar por ID ou cliente..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            flex="1"
          />
        </HStack>
        <HStack spacing={2}>
          <Button size="sm" variant="outline">
            Hoje
          </Button>
          <Button size="sm" variant="outline">
            Esta Semana
          </Button>
          <Button size="sm" variant="outline">
            Este Mês
          </Button>
        </HStack>
      </Flex>

      {/* Cabeçalho da Tabela */}
      <Box borderWidth="1px" borderRadius="md" overflow="hidden" mb={4}>
        <Flex
          bg="gray.50"
          p={4}
          borderBottomWidth="1px"
          fontWeight="semibold"
          fontSize="sm"
          color="gray.700"
        >
          <Box flex="1">ID</Box>
          <Box flex="1">Data</Box>
          <Box flex="2">Cliente</Box>
          <Box flex="1" textAlign="center">Itens</Box>
          <Box flex="1" textAlign="right">Total</Box>
          <Box flex="1" textAlign="center">Status</Box>
          <Box flex="1" textAlign="center">Ações</Box>
        </Flex>

        {/* Lista de Vendas */}
        {filteredSales.length === 0 ? (
          <Box p={8} textAlign="center">
            <Text color="gray.500">Nenhuma venda encontrada</Text>
          </Box>
        ) : (
          <Stack spacing={0} divider={<Box borderTopWidth="1px" />}>
            {filteredSales.map((sale) => (
              <Flex
                key={sale.id}
                p={4}
                align="center"
                _hover={{ bg: "gray.50" }}
                transition="background 0.2s"
              >
                <Box flex="1" fontWeight="semibold">
                  {sale.id}
                </Box>
                <Box flex="1">{formatDate(sale.date)}</Box>
                <Box flex="2">{sale.customer}</Box>
                <Box flex="1" textAlign="center">
                  {sale.items}
                </Box>
                <Box flex="1" textAlign="right" fontWeight="semibold" color="green.600">
                  {formatCurrency(sale.total)}
                </Box>
                <Box flex="1" textAlign="center">
                  <Badge colorScheme={getStatusColor(sale.status)}>
                    {sale.status}
                  </Badge>
                </Box>
                <Box flex="1" textAlign="center">
                  <HStack spacing={2} justify="center">
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiEye />}
                      aria-label="Ver detalhes"
                      onClick={() => navigate(`/sales/${sale.id}`)}
                    />
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiEdit />}
                      aria-label="Editar"
                      colorScheme="blue"
                    />
                    <IconButton
                      size="sm"
                      variant="ghost"
                      icon={<FiTrash2 />}
                      aria-label="Excluir"
                      colorScheme="red"
                    />
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

