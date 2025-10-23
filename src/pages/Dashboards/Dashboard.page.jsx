import React from "react";
import { Box } from "@chakra-ui/react";
import { Sidebar } from "../../components/layout/Sidebar"; 
import { DashboardView } from "../Dashboards/Dashboard.view";

export const DashboardPage = () => {
  return (
    <Box display="flex" minH="100vh">
      {/* Sidebar fixa */}
      <Sidebar activeKey="dashboard" />

      {/* Conteúdo com margem esquerda para não ficar atrás da sidebar */}
      <Box flex="1" ml="260px" bg="gray.50" p={6}>
        <DashboardView />
      </Box>
    </Box>
  );
};
