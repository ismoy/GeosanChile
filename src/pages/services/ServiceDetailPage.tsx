import React from "react";
import { useParams } from "react-router-dom";
import Footer from "@/component/core/footer/Footer";
import ServiceComponent from "@/component/services/ServiceComponent";
import { useServices } from "@/hooks/useServices";
import { Box, CircularProgress, Typography } from "@mui/material";

const ServiceDetailPage: React.FC = () => {
  const { serviceKey } = useParams<{ serviceKey: string }>();
  const { services, loading, error } = useServices();

  // Buscar el servicio seleccionado por serviceKey
  const selectedService = services.find((service) => service.serviceKey === serviceKey);

  // Estado de carga
  if (loading) {
    return (
      <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
        <CircularProgress />
      </Box>
    );
  }

  // Estado de error
  if (error) {
    return (
      <Box sx={{ textAlign: "center", marginTop: 8 }}>
        <Typography variant="h5" color="error">
          {error}
        </Typography>
      </Box>
    );
  }

  // Estado cuando no se encuentra el servicio
  if (!selectedService) {
    return (
      <div className="flex flex-col min-h-screen overflow-hidden">
        <div className="flex-grow flex items-center justify-center">
          <Typography variant="h4">Servicio no encontrado</Typography>
        </div>
        <Footer />
      </div>
    );
  }

  // Mostrar el servicio seleccionado
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow flex">
        <ServiceComponent
          title={selectedService.details.title}
          descriptions={selectedService.details.descriptions}
          comparisons={selectedService.details.comparisons}
        />
      </div>
      <Footer />
    </div>
  );
};

export default ServiceDetailPage;