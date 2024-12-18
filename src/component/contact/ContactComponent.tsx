import 'leaflet/dist/leaflet.css';
import { Box, Typography, Grid, Paper, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmailForm from '../core/EmailForm';
import MapComponent from '../core/MapComponent';

const ContactComponent = () => {
  return (
    <Box sx={{ minHeight: '100vh', width: '100%', backgroundColor: '#f9f9f9' }}>
      {/* Encabezado */}
      <Box
        sx={{
          py: 8,
          textAlign: 'center',
          backgroundColor: '#006f29',
          color: '#fff',
          mt: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2,fontSize:'1.8rem' }}>
          Contáctanos
        </Typography>
        <Typography variant="h6">
          Estamos aquí para ayudarte. ¡Envíanos un mensaje y nos pondremos en contacto!
        </Typography>
      </Box>

      {/* Contenido Principal */}
      <Box sx={{ py: 8, px: 3 }}>
        <Grid container spacing={3}>
          {/* Formulario de Contacto */}
          <Grid item xs={12} md={6}>
            <Paper sx={{ p: 4, boxShadow: 3 }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#006f29' }}>
                Formulario de Contacto
              </Typography>
              <EmailForm />
            </Paper>
          </Grid>

          {/* Información de Contacto y Mapa */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* Información de Contacto */}
              <Paper sx={{ p: 4, boxShadow: 3 }}>
                <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#006f29' }}>
                  Nuestra Información
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <PhoneIcon sx={{ color: '#006f29' }} />
                    </ListItemIcon>
                    <ListItemText primary="+56956403139" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <EmailIcon sx={{ color: '#006f29' }} />
                    </ListItemIcon>
                    <ListItemText primary="info@geosanplagas.cl" />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <LocationOnIcon sx={{ color: '#006f29' }} />
                    </ListItemIcon>
                    <ListItemText primary="Av. Providencia 1234, Santiago, Chile" />
                  </ListItem>
                </List>
              </Paper>

              {/* Mapa Interactivo */}
              <MapComponent center={[-33.1830047, -70.6733444]} zoom={30} styleClass="h-64 rounded-lg shadow-lg" showPopup={true} />
            </Box>
          </Grid>
        </Grid>
      </Box>

    </Box>
  );
};

export default ContactComponent;