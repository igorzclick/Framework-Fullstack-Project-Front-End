import React from "react";
import {useColorModeValue} from "../../../src/components/ui/color-mode";
import {
  Box,
  Flex,
  Stack,
  Text,
  Heading,
  Button,
  Badge,
  Progress,
  IconButton,

} from "@chakra-ui/react";
import { FiTrendingUp, FiTrendingDown, FiPlus, FiShoppingCart } from "react-icons/fi";

export const Dashboard = () => {
  const green = "green.500";
  const red = "red.500";
  const blue = "blue.500";
  const grayLight = useColorModeValue("gray.100", "gray.700");

  return (
    <Box p={6} bg="white" rounded="md" shadow="md" minH="100vh">
      {/* Header */}
      <Flex justify="space-between" align="center" mb={6}>
        <Heading size="lg" fontWeight="bold">
          Gerenciamento
        </Heading>
        <Text color="gray.500" fontSize="sm">
          Controle completo do seu mercado
        </Text>
        <Flex gap={2}>
          <Button size="sm" variant="outline">
            Produtos
          </Button>
          <Button size="sm" variant="outline">
            Vendas
          </Button>
          <Button size="sm" colorScheme="blue" leftIcon={<FiPlus />}>
            Nova Venda
          </Button>
        </Flex>
      </Flex>

      {/* Resumo principal */}
      <Flex
        gap={6}
        wrap="wrap"
        justify="space-between"
        mb={8}
        fontWeight="bold"
        fontSize="lg"
      >
        <Box>
          <Text fontSize="sm" color="gray.600">
            Saldo Total
          </Text>
          <Text>R$ 15.430,75</Text>
        </Box>
        <Box color={green}>
          <Text fontSize="sm" color="gray.600">
            Receita Hoje
          </Text>
          <Text>R$ 2.847,50</Text>
        </Box>
        <Box color={green}>
          <Text fontSize="sm" color="gray.600">
            Receita Mês
          </Text>
          <Text>R$ 45.230,80</Text>
        </Box>
        <Box color={red}>
          <Text fontSize="sm" color="gray.600">
            Gastos Hoje
          </Text>
          <Text>R$ 1.200,00</Text>
        </Box>
        <Box color={blue}>
          <Text fontSize="sm" color="gray.600">
            Lucro Hoje
          </Text>
          <Text>R$ 1.647,50</Text>
        </Box>
      </Flex>

      <Flex gap={6} wrap="wrap" justify="space-between">
        {/* Alertas de Estoque */}
        <Box
          flex="1"
          minW="300px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg={grayLight}
        >
          <Flex align="center" mb={2}>
            <Badge colorScheme="yellow" mr={2}>
              ⚠️
            </Badge>
            <Text fontWeight="bold">Alertas de Estoque</Text>
          </Flex>
          <Text fontSize="sm" mb={4} color="gray.600">
            Produtos com estoque baixo ou em falta
          </Text>

          {/* Pão de Açúcar */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text>Pão de Açúcar</Text>
              <Badge colorScheme="red">Em Falta</Badge>
            </Flex>
            <Text fontSize="sm" color="gray.500">
              Atual: 0 - Mínimo: 5
            </Text>
            <Progress value={0} size="sm" colorScheme="red" />
          </Box>

          {/* Leite Integral 1L */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text>Leite Integral 1L</Text>
              <Badge colorScheme="yellow">Estoque Baixo</Badge>
            </Flex>
            <Text fontSize="sm" color="gray.500">
              Atual: 3 - Mínimo: 10
            </Text>
            <Progress value={(3 / 10) * 100} size="sm" colorScheme="yellow" />
          </Box>

          {/* Açúcar 1kg */}
          <Box>
            <Flex justify="space-between" mb={1}>
              <Text>Açúcar 1kg</Text>
              <Badge colorScheme="yellow">Estoque Baixo</Badge>
            </Flex>
            <Text fontSize="sm" color="gray.500">
              Atual: 5 - Mínimo: 15
            </Text>
            <Progress value={(5 / 15) * 100} size="sm" colorScheme="yellow" />
          </Box>
        </Box>

        {/* Top Produtos */}
        <Box
          flex="1"
          minW="300px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg={grayLight}
        >
          <Flex align="center" mb={4} justify="space-between">
            <Text fontWeight="bold">Top Produtos</Text>
            <Text fontSize="sm" color="gray.600">
              Mais vendidos do mês
            </Text>
          </Flex>

          {/* Produto 1 */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text fontWeight="semibold">Coca-Cola 2L</Text>
              <Badge colorScheme="gray" variant="outline" fontSize="xs">
                #1
              </Badge>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color="gray.600">
              <Text>Vendas: 45</Text>
              <Text color={green}>Receita: R$ 382,50</Text>
              <Text>Estoque: 28</Text>
            </Flex>
          </Box>

          {/* Produto 2 */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text fontWeight="semibold">Pão Francês</Text>
              <Badge colorScheme="gray" variant="outline" fontSize="xs">
                #2
              </Badge>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color="gray.600">
              <Text>Vendas: 120</Text>
              <Text color={green}>Receita: R$ 600,00</Text>
              <Text>Estoque: 0</Text>
            </Flex>
          </Box>

          {/* Produto 3 */}
          <Box>
            <Flex justify="space-between" mb={1}>
              <Text fontWeight="semibold">Leite Integral</Text>
              <Badge colorScheme="gray" variant="outline" fontSize="xs">
                #3
              </Badge>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color="gray.600">
              <Text>Vendas: 32</Text>
              <Text color={green}>Receita: R$ 185,60</Text>
              <Text>Estoque: 12</Text>
            </Flex>
          </Box>
        </Box>

        {/* Resumo de Vendas */}
        <Box
          flex="1"
          minW="300px"
          borderWidth="1px"
          borderRadius="md"
          p={4}
          bg={grayLight}
        >
          <Flex align="center" mb={4} justify="space-between">
            <Text fontWeight="bold">Resumo de Vendas</Text>
            <Text fontSize="sm" color="gray.600">
              Performance por período
            </Text>
          </Flex>

          {/* Hoje */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text>Hoje</Text>
              <Text fontSize="xs" color="gray.500">
                28 vendas
              </Text>
            </Flex>
            <Flex justify="space-between" fontWeight="semibold" mb={1}>
              <Text>Receita</Text>
              <Text color={green}>R$ 2.847,50</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color={blue}>
              <Text>Ticket Médio</Text>
              <Text>R$ 101,70</Text>
            </Flex>
            <Box height="1px" bg="gray.200" my={3} />

          </Box>

          {/* Ontem */}
          <Box mb={4}>
            <Flex justify="space-between" mb={1}>
              <Text>Ontem</Text>
              <Text fontSize="xs" color="gray.500">
                25 vendas
              </Text>
            </Flex>
            <Flex justify="space-between" fontWeight="semibold" mb={1}>
              <Text>Receita</Text>
              <Text color={green}>R$ 2.456,80</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color={blue}>
              <Text>Ticket Médio</Text>
              <Text>R$ 98,27</Text>
            </Flex>
            <Box height="1px" bg="gray.200" my={3} />

          </Box>

          {/* Esta Semana */}
          <Box>
            <Flex justify="space-between" mb={1}>
              <Text>Esta Semana</Text>
              <Text fontSize="xs" color="gray.500">
                156 vendas
              </Text>
            </Flex>
            <Flex justify="space-between" fontWeight="semibold" mb={1}>
              <Text>Receita</Text>
              <Text color={green}>R$ 15.890,30</Text>
            </Flex>
            <Flex justify="space-between" fontSize="sm" color={blue}>
              <Text>Ticket Médio</Text>
              <Text>R$ 101,86</Text>
            </Flex>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};
