import React, { useState, useEffect } from "react";
import { Box, Typography, Grid, Card, CardContent, useMediaQuery, useTheme, Paper, CircularProgress } from "@mui/material";
import ReactCompareImage from "react-compare-image";

interface ServiceDetailProps {
  title: string;
  descriptions: string;
  comparisons: { before: string; after: string; description: string }[];
}

const ServiceComponent: React.FC<ServiceDetailProps> = ({ descriptions, comparisons }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>([]);

  useEffect(() => {
    // Inicializa el estado de carga para cada comparación
    setImagesLoaded(Array(comparisons.length).fill(false));
  }, [comparisons]);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const updated = [...prev];
      updated[index] = true;
      return updated;
    });
  };

  const gridColumns = comparisons.length <= 2 ? 6 : 4;

  return (
    <Box
      sx={{
        width: "100%",
        margin: "0 auto",
        paddingX: "16px", // Margin horizontal de 16px
        paddingY: 4,
        backgroundColor: "#f8f9fa",
      }}
    >
      {/* Descripción General */}
      <Box
        sx={{
          maxWidth: "800px", // Ancho fijo
          margin: "0 auto", // Centrado horizontal
          marginBottom: 4,
          textAlign: "center",
          mt: 8,
        }}
      >
        <Paper
          sx={{
            padding: 4,
            boxShadow: 3,
            borderRadius: 2,
            backgroundColor: "#ffffff",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              marginBottom: 2,
              color: "#004d1a",
              textAlign: "center",
            }}
          >
            Descripción General
          </Typography>
          <Typography
            variant="body1"
            sx={{
              lineHeight: 1.8,
              textAlign: "justify", // Justificar el texto
            }}
          >
            {descriptions}
          </Typography>
        </Paper>
      </Box>

      {/* Comparadores */}
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={4} justifyContent="center">
          {comparisons.map((comparison, index) => {
            if (!comparison.before || !comparison.after) return null;

            return (
              <Grid item xs={12} sm={gridColumns} md={gridColumns} key={index}>
                <Card
                  sx={{
                    boxShadow: 3,
                    transition: "transform 0.3s ease",
                    "&:hover": { transform: "scale(1.05)" },
                    borderRadius: 2,
                    overflow: "hidden",
                    width: "100%",
                  }}
                >
                  <Box position="relative" sx={{ width: "100%" }}>
                    {!imagesLoaded[index] && (
                      <Box
                        sx={{
                          position: "absolute",
                          top: 0,
                          left: 0,
                          display: "flex",
                          justifyContent: "center",
                          alignItems: "center",
                          width: "100%",
                          height: "100%",
                          backgroundColor: "#f0f0f0",
                        }}
                      >
                        <CircularProgress />
                      </Box>
                    )}
                    <img
                      src={comparison.before}
                      alt="before"
                      onLoad={() => handleImageLoad(index)}
                      style={{ display: "none" }}
                    />
                    <ReactCompareImage
                      leftImage={comparison.before}
                      rightImage={comparison.after}
                      aspectRatio="wider"
                      handleSize={isMobile ? 20 : 30}
                    />
                  </Box>

                  <CardContent sx={{ textAlign: "center", padding: 2 }}>
                    <Typography variant="body1" sx={{ fontWeight: "bold", marginBottom: 1 }}>
                      {comparison.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Box>
  );
};

export default ServiceComponent;