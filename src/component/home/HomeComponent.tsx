import { Box, Typography, Grid, Button, Paper, Avatar, CircularProgress } from "@mui/material";
import { HighQuality, Speed, Star, StarHalf, StarOutline, Verified } from "@mui/icons-material";
import { useServices } from "@/hooks/useServices";
import { toast, ToastContainer } from "react-toastify";
import { useTestimonials } from "@/hooks/useTestimonials";

  const getInitials = (name: string) => {
    const names = name.split(" ");
    return names.map((n) => n[0]).join("");
  };
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= Math.floor(rating)) {
        // Llena la estrella completamente
        stars.push(<Star key={i} sx={{ color: "#ffc107" }} />);
      } else if (i === Math.ceil(rating) && !Number.isInteger(rating)) {
        // Agrega media estrella
        stars.push(<StarHalf key={i} sx={{ color: "#ffc107" }} />);
      } else {
        // Deja la estrella vacía
        stars.push(<StarOutline key={i} sx={{ color: "#ffc107" }} />);
      }
    }
    return stars;
  };
  
const HomeComponent: React.FC = () => {
  const {services,loading,error} = useServices();
  const { testimonials,loadingTest,errorTest } = useTestimonials();
  const latestServices = services?.length ? services.slice(-3) : [];
 /* const uniqueServices = Object.values(
    services.reduce((acc, service) => {
      const key = service.serviceKey; // serviceKey debe estar disponible en el modelo de servicio
      if (!acc[key]) {
        acc[key] = service; // Tomar solo el primer servicio para cada key
      }
      return acc;
    }, {} as Record<string, typeof services[number]>)
  );*/

  return (
    <Box>
      {/* Últimos Servicios */}
      <Box sx={{ padding: 4, marginTop: 6 }}>
  <Typography variant="h4" align="center" gutterBottom>
    Últimos Servicios
  </Typography>
  {loading ? (
          // Mostrar indicador de carga mientras se obtienen los datos
          <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center", height: 300 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
         toast.error('Error! No se pudieron cargar los servicios '+error)
        ) : (
          // Mostrar los datos cuando se hayan cargado
          <Grid container spacing={2} sx={{ marginTop: 3 }}>
          {latestServices.map((service) => (
            <Grid item xs={12} sm={6} md={4} key={service.id}>
              <Paper
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                  height: "100%", // Garantiza que todos los cards tengan la misma altura
                  boxShadow: 3,
                  borderRadius: 2,
                  overflow: "hidden",
                  transition: "transform 0.3s ease",
                  "&:hover": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                {/* Imagen */}
                <Box
                  component="img"
                  src={service.details.comparisons.map((comparison) => comparison.after)[0]}
                  alt={service.details.title}
                  sx={{
                    width: "100%",
                    height: 200, // Altura fija para la imagen
                    objectFit: "cover",
                  }}
                />
                {/* Contenido */}
                <Box
                  sx={{
                    padding: 2,
                    flexGrow: 1, // Asegura que el contenido ocupe el espacio restante
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography variant="h6" sx={{ marginBottom: 1 }}>
                    {service.details.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ flexGrow: 1 }}>
                    {service.details.comparisons[0].description}
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ marginTop: 1 }}>
                    Cliente: {service.details.client}
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          ))}
        </Grid>
        )}
</Box>
   
      <Box
      sx={{
        backgroundColor: "#f9f9f9", // Fondo ligeramente diferente al blanco
        padding: 4,
        textAlign: "center",
      }}
    >
      <Typography variant="h4" sx={{ fontWeight: "bold", marginBottom: 3 }}>
        ¿Por qué elegirnos?
      </Typography>
      <Grid container spacing={4}>
        {/* Rapidez */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Speed sx={{ fontSize: 60, color: "#006f29", marginBottom: 2 }} />
            <Typography variant="h6">Rapidez</Typography>
            <Typography variant="body2" color="text.secondary">
              Realizamos nuestros servicios en tiempos récord, sin comprometer la calidad.
            </Typography>
          </Box>
        </Grid>

        {/* Confianza */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <Verified sx={{ fontSize: 60, color: "#006f29", marginBottom: 2 }} />
            <Typography variant="h6">Confianza</Typography>
            <Typography variant="body2" color="text.secondary">
              Más de 500 clientes satisfechos avalan nuestra experiencia.
            </Typography>
          </Box>
        </Grid>

        {/* Calidad */}
        <Grid item xs={12} sm={4}>
          <Box sx={{ textAlign: "center" }}>
            <HighQuality sx={{ fontSize: 60, color: "#006f29", marginBottom: 2 }} />
            <Typography variant="h6">Calidad</Typography>
            <Typography variant="body2" color="text.secondary">
              Usamos productos de última generación para garantizar los mejores resultados.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>

      {/* Sección de Testimonios */}
      {!loadingTest && !errorTest && testimonials.length > 0 ? (
  <Box
    sx={{
      backgroundColor: "#f9f9f9",
      padding: 4,
      marginTop: 6,
    }}
  >
    <Typography variant="h4" align="center" gutterBottom>
      Lo Que Dicen Nuestros Clientes
    </Typography>

    <Grid container spacing={4} sx={{ marginTop: 3, justifyContent: "center" }}>
      {testimonials.map((testimonial) => (
        <Grid item key={testimonial.id}>
          <Paper
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              alignItems: "center",
              padding: 3,
              width: 280, // Ancho fijo
              height: 340, // Altura ajustada para incluir las estrellas
              boxShadow: 3,
              borderRadius: 2,
              transition: "transform 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)", // Efecto de zoom al pasar el mouse
              },
            }}
          >
            <Avatar
              sx={{
                width: 80,
                height: 80,
                backgroundColor: "#006f29", // Color de fondo del avatar
                color: "#fff", // Color del texto
                fontSize: "1.5rem",
                fontWeight: "bold",
                marginBottom: 2,
              }}
            >
              {getInitials(testimonial.name)}
            </Avatar>
            <Typography
              variant="h6"
              sx={{ fontWeight: "bold", marginBottom: 1, textAlign: "center" }}
            >
              {testimonial.name}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontStyle: "italic",
                color: "text.secondary",
                textAlign: "center",
                marginBottom: 2,
              }}
            >
              "{testimonial.comment}"
            </Typography>
            {/* Sección de estrellas */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 2,
              }}
            >
              {renderStars(testimonial.rating)}
            </Box>
          </Paper>
        </Grid>
      ))}
    </Grid>
  </Box>
) : loadingTest ? (
  <Box
    sx={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: 300, // Altura fija mientras se carga
    }}
  >
    <CircularProgress />
  </Box>
) : null}
      <ToastContainer />
    </Box>
  );
};

export default HomeComponent;