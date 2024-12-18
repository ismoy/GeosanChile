import React from 'react';
import { Box, Typography, Grid, Card, CardContent, Avatar, CircularProgress } from '@mui/material';
import { Business, Verified, Work } from '@mui/icons-material';
import { useAboutUs } from '@/hooks/useAboutUs';

const AboutUsComponent: React.FC = () => {
  const { aboutUs, loading, error } = useAboutUs();

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
        }}
      >
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ textAlign: 'center', marginTop: 4 }}>
        <Typography variant="h5" color="error">
          Error: {error}
        </Typography>
      </Box>
    );
  }

  if (!aboutUs) {
    return null;
  }

  return (
    <Box sx={{ backgroundColor: '#f8f9fa', minHeight: '100vh', paddingBottom: 6 }}>
      {/* Encabezado */}
      <Box
        sx={{
          backgroundColor: '#006f29',
          color: '#fff',
          py: 8,
          textAlign: 'center',
          paddingX: 2,
          mt: 4,
        }}
      >
        <Typography variant="h2" sx={{ fontWeight: 'bold', mb: 2, fontSize: '1.4rem' }}>
          {aboutUs.about.title}
        </Typography>
        <Typography variant="h6" sx={{ maxWidth: 800, mx: 'auto', fontSize: '1.1rem' }}>
          {aboutUs.about.description}
        </Typography>
      </Box>

      {/* Historia */}
      <Box sx={{ py: 8, px: 3 }}>
        <Grid container spacing={6} alignItems="stretch">
          {/* Texto de Historia */}
          <Grid item xs={12} md={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 3, color: '#006f29' }}>
                {aboutUs.history.title}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: 'justify', lineHeight: 1.6 }}>
                {aboutUs.history.description}
              </Typography>
            </Box>
          </Grid>

          {/* Experiencia */}
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                backgroundColor: '#e9ecef',
                borderRadius: 2,
                padding: 4,
                textAlign: 'center',
                boxShadow: 3,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <Business sx={{ fontSize: 60, color: '#006f29', mb: 2 }} />
              <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                {aboutUs.experience.title}
              </Typography>
              <Typography variant="body2" sx={{ textAlign: 'center', lineHeight: 1.6 }}>
                {aboutUs.experience.description}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>

      {/* Misión y Visión */}
      <Box sx={{ py: 8, px: 3, backgroundColor: '#e9ecef' }}>
        <Grid container spacing={6} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                boxShadow: 3,
                textAlign: 'center',
                height: '100%',
                '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' },
              }}
            >
              <CardContent>
                <Verified sx={{ fontSize: 60, color: '#006f29', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {aboutUs.mission.title}
                </Typography>
                <Typography variant="body1">{aboutUs.mission.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card
              sx={{
                padding: 3,
                boxShadow: 3,
                textAlign: 'center',
                height: '100%',
                '&:hover': { transform: 'scale(1.02)', transition: 'all 0.3s ease-in-out' },
              }}
            >
              <CardContent>
                <Work sx={{ fontSize: 60, color: '#006f29', mb: 2 }} />
                <Typography variant="h5" sx={{ fontWeight: 'bold', mb: 2 }}>
                  {aboutUs.vision.title}
                </Typography>
                <Typography variant="body1">{aboutUs.vision.description}</Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>

      {/* Equipo */}
      <Box sx={{ py: 8, px: 3 }}>
        <Typography variant="h4" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 6, color: '#006f29' }}>
          Nuestro Equipo
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {aboutUs.team.map((member, index) => (
            <Grid item key={index}>
              <Card
                sx={{
                  width: 300,
                  textAlign: 'center',
                  boxShadow: 3,
                  padding: 3,
                  '&:hover': { transform: 'scale(1.05)', transition: 'all 0.3s ease-in-out' },
                }}
              >
                <Avatar
                  sx={{
                    bgcolor: '#006f29',
                    color: '#fff',
                    width: 80,
                    height: 80,
                    fontSize: 24,
                    mx: 'auto',
                    mb: 3,
                  }}
                >
                  {member.name.split(' ').map((n) => n[0]).join('')}
                </Avatar>
                <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                  {member.name}
                </Typography>
                <Typography variant="body2" sx={{ color: '#6c757d' }}>
                  {member.role}
                </Typography>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default AboutUsComponent;