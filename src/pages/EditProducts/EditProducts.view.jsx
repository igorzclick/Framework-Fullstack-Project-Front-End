import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import {
  Box,
  Flex,
  Heading,
  Text,
  Input,
  Button,
  Field,
  Image,
  Stack,
} from "@chakra-ui/react";
import { toaster } from "../../components/ui/toaster";

// Simulação de busca de dados do produto - mover para fora do componente
const mockProducts = [
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
      "https://images.unsplash.com/photo-1606813902778-8d6d80c81d33?auto=format&fit=crop&w=400&q=80",
    status: "ativo",
  },
  {
    id: "PROD-003",
    sellerId: "VENDEDOR-789",
    name: "Jaqueta Jeans",
    price: 199.5,
    quantity: 5,
    image:
      "https://images.unsplash.com/photo-1596464716121-65b3b14a1f59?auto=format&fit=crop&w=400&q=80",
    status: "ativo",
  },
];

export const EditProductView = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const found = mockProducts.find((p) => p.id === id);
    setProduct(found || null);
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Limpar erro do campo quando o usuário começar a digitar
    setErrors((prev) => ({ ...prev, [name]: "" }));
    
    // Converter valores numéricos
    if (name === "price" || name === "quantity") {
      setProduct((prev) => ({ ...prev, [name]: value === "" ? "" : Number(value) }));
    } else {
      setProduct((prev) => ({ ...prev, [name]: value }));
    }
  };

  const validateForm = () => {
    let errors = {};
    
    if (!product.name || product.name.trim() === "") {
      errors.name = "Nome do produto é obrigatório";
    }
    
    if (!product.price || product.price <= 0) {
      errors.price = "Preço deve ser maior que zero";
    }
    
    if (!product.quantity || product.quantity < 0) {
      errors.quantity = "Quantidade deve ser um número não negativo";
    }
    
    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    try {
      // Aqui vai a chamada à API de atualização (PUT /products/:id)
      // const response = await updateProduct(id, product);
      
      // Simulação de API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toaster.success({
        title: "Produto atualizado",
        description: "As alterações foram salvas com sucesso",
      });
      
      navigate("/products");
    } catch (err) {
      toaster.error({
        title: "Erro ao atualizar produto",
        description: err?.response?.data?.message || "Tente novamente mais tarde",
      });
    } finally {
      setIsLoading(false);
    }
  };

  if (!product) {
    return (
      <Box p={8} textAlign="center" bg="white" rounded="md" shadow="md">
        <Text mb={4}>Produto não encontrado.</Text>
        <Button onClick={() => navigate("/products")}>
          Voltar para Produtos
        </Button>
      </Box>
    );
  }

  return (
    <Box p={6} bg="white" rounded="md" shadow="md">
      <Flex justify="space-between" align="center" mb={6}>
        <Box>
          <Heading size="lg" mb={1}>
            Editar Produto
          </Heading>
          <Text color="gray.500" fontSize="sm">
            ID: {product.id}
          </Text>
        </Box>
        <Button variant="outline" onClick={() => navigate("/products")}>
          Voltar
        </Button>
      </Flex>

      <form onSubmit={handleSubmit}>
        <Stack spacing={4} maxW="600px">
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Nome do Produto</Field.Label>
            <Input
              name="name"
              value={product.name}
              onChange={handleChange}
              placeholder="Digite o nome"
            />
            {errors.name && <Field.ErrorText>{errors.name}</Field.ErrorText>}
          </Field.Root>

          <Field.Root invalid={!!errors.price}>
            <Field.Label>Preço</Field.Label>
            <Input
              type="number"
              step="0.01"
              name="price"
              value={product.price}
              onChange={handleChange}
              placeholder="Ex: 99.90"
              min="0"
            />
            {errors.price && <Field.ErrorText>{errors.price}</Field.ErrorText>}
          </Field.Root>

          <Field.Root invalid={!!errors.quantity}>
            <Field.Label>Quantidade</Field.Label>
            <Input
              type="number"
              name="quantity"
              value={product.quantity}
              onChange={handleChange}
              placeholder="Ex: 10"
              min="0"
            />
            {errors.quantity && <Field.ErrorText>{errors.quantity}</Field.ErrorText>}
          </Field.Root>

          <Field.Root invalid={!!errors.image}>
            <Field.Label>Imagem (URL)</Field.Label>
            <Input
              name="image"
              value={product.image}
              onChange={handleChange}
              placeholder="Cole o link da imagem"
            />
            {product.image && (
              <Image
                src={product.image}
                alt={product.name}
                boxSize="150px"
                mt={2}
                objectFit="cover"
                borderRadius="md"
              />
            )}
            {errors.image && <Field.ErrorText>{errors.image}</Field.ErrorText>}
          </Field.Root>

          <Field.Root>
            <Field.Label>Status</Field.Label>
            <select
              name="status"
              value={product.status}
              onChange={handleChange}
              style={{
                width: "100%",
                padding: "8px",
                borderRadius: "6px",
                border: "1px solid #e2e8f0",
              }}
            >
              <option value="ativo">Ativo</option>
              <option value="inativo">Inativo</option>
            </select>
          </Field.Root>

          <Flex gap={2} mt={4}>
            <Button
              type="submit"
              colorScheme="blue"
              isLoading={isLoading}
              disabled={isLoading}
              flex="1"
            >
              Salvar Alterações
            </Button>
            <Button
              variant="outline"
              onClick={() => navigate("/products")}
              disabled={isLoading}
            >
              Cancelar
            </Button>
          </Flex>
        </Stack>
      </form>
    </Box>
  );
};
