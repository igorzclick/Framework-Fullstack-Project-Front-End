import React, { useState } from "react";
import { useNavigate } from "react-router";
import {
  Box,
  Button,
  Card,
  Input,
  Stack,
  Center,
  Field,
  Text,
  Heading,
  Flex,
} from "@chakra-ui/react";
import { toaster } from "../../components/ui/toaster";
import logo from "../../assets/logo_editada.png";

export const CreateSaleView = () => {
  const [formData, setFormData] = useState({
    produto: "",
    quantidade: "",
    valor: "",
  });
  const [errors, setErrors] = useState({
    produto: "",
    quantidade: "",
    valor: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const validateForm = () => {
    let errors = {};
    
    if (!formData.produto) {
      errors.produto = "ID do produto é obrigatório";
    }
    
    if (!formData.quantidade) {
      errors.quantidade = "Quantidade é obrigatória";
    } else if (isNaN(formData.quantidade) || parseInt(formData.quantidade) <= 0) {
      errors.quantidade = "Quantidade deve ser um número inteiro positivo";
    }
    
    if (!formData.valor) {
      errors.valor = "Valor é obrigatório";
    } else if (isNaN(formData.valor) || parseFloat(formData.valor) <= 0) {
      errors.valor = "Valor deve ser um número positivo";
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
      // Aqui você fará a chamada à API para criar a venda
      // const response = await createSale({
      //   produto_id: parseInt(formData.produto),
      //   quantidade: parseInt(formData.quantidade),
      //   valor: parseFloat(formData.valor),
      // });

      // Simulação de sucesso
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toaster.success({
        title: "Venda criada com sucesso",
        description: "A venda foi registrada no sistema",
      });

      // Redirecionar para a página de vendas
      navigate("/Sales");
    } catch (err) {
      toaster.error({
        title: "Erro ao criar venda",
        description: err?.response?.data?.message || "Tente novamente mais tarde",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/Sales");
  };

  return (
    <Center w="100%" h="100vh" py="10">
      <Card.Root width="520px">
        <form onSubmit={handleSubmit}>
          <Card.Body gap="2">
            <Center w="100%">
              <img
                src={logo}
                alt="Logo"
                style={{ width: "100px", objectFit: "cover", height: "40px" }}
              />
            </Center>

            <Card.Title>Nova Venda</Card.Title>
            <Card.Description>
              Preencha os dados para registrar uma nova venda
            </Card.Description>

            <Stack gap="2">
              {/* Campo Produto (ID) */}
              <Field.Root invalid={!!errors.produto}>
                <Field.Label>ID do Produto</Field.Label>
                <Input
                  type="text"
                  placeholder="Digite o ID do produto"
                  value={formData.produto}
                  onChange={(e) => {
                    setErrors({ ...errors, produto: "" });
                    setFormData({ ...formData, produto: e.target.value });
                  }}
                />
                {errors.produto && (
                  <Field.ErrorText>{errors.produto}</Field.ErrorText>
                )}
              </Field.Root>

              {/* Campo Quantidade */}
              <Field.Root invalid={!!errors.quantidade}>
                <Field.Label>Quantidade</Field.Label>
                <Input
                  type="number"
                  placeholder="Digite a quantidade"
                  value={formData.quantidade}
                  onChange={(e) => {
                    setErrors({ ...errors, quantidade: "" });
                    setFormData({ ...formData, quantidade: e.target.value });
                  }}
                  min="1"
                  step="1"
                />
                {errors.quantidade && (
                  <Field.ErrorText>{errors.quantidade}</Field.ErrorText>
                )}
              </Field.Root>

              {/* Campo Valor */}
              <Field.Root invalid={!!errors.valor}>
                <Field.Label>Valor</Field.Label>
                <Input
                  type="number"
                  placeholder="Digite o valor (ex: 10.50)"
                  value={formData.valor}
                  onChange={(e) => {
                    setErrors({ ...errors, valor: "" });
                    setFormData({ ...formData, valor: e.target.value });
                  }}
                  min="0"
                  step="0.01"
                />
                {errors.valor && (
                  <Field.ErrorText>{errors.valor}</Field.ErrorText>
                )}
              </Field.Root>
            </Stack>
          </Card.Body>

          <Card.Footer flex flexDirection={"column"} gap="2">
            <Button
              type="submit"
              width={"100%"}
              isLoading={isLoading}
              disabled={isLoading}
              colorScheme="blue"
            >
              Criar Venda
            </Button>
            <Button
              variant="outline"
              onClick={handleCancel}
              width={"100%"}
            >
              Cancelar
            </Button>
          </Card.Footer>
        </form>
      </Card.Root>
    </Center>
  );
};

