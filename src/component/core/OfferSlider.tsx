import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography, Button } from '@mui/material';
import { Offer } from '@/domain/model/Offer';
import { useNavigate } from 'react-router-dom'; // Importa el hook useNavigate

interface OffersSliderProps {
  offers: Offer[];
  slidesToShow?: number;
  showDots?: boolean;
  autoplay?: boolean;
  id?: number;
}

const OffersSlider: React.FC<OffersSliderProps> = ({
  offers,
  slidesToShow = 1,
  showDots = true,
  autoplay = true,
  id = 0,
}) => {
  const navigate = useNavigate(); // Inicializa el hook useNavigate

  const settings = {
    dots: showDots,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const handleButtonClick = () => {
    navigate('/contact'); // Redirige a la página de contacto
  };

  return (
    <Box
      sx={{
        marginX: '30px',
        borderRadius: 3,
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {offers.map((offer, index) => (
          <Box
            key={`${id}-${index}`}
            sx={{
              position: 'relative',
              width: '100%',
              height: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              textAlign: 'center',
              borderRadius: 3,
              overflow: 'hidden',
              mt: 6,
            }}
          >
            {/* Imagen de fondo */}
            <Box
              component="img"
              src={offer.image}
              alt={offer.title}
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                zIndex: -1,
              }}
            />
            {/* Contenido */}
            <Box
              sx={{
                backgroundColor: 'rgba(0, 0, 0, 0.5)',
                padding: 4,
                borderRadius: 3,
                display: 'inline-block',
              }}
            >
              <Typography variant="h4" sx={{ fontWeight: 'bold', mb: 2 }}>
                {offer.title}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                {offer.description}
              </Typography>
              <Button
                      variant="contained"
                      onClick={handleButtonClick}
                      sx={{
                        textTransform: "none",
                        borderColor: "#006f29",
                        color: "#fff",
                        bgcolor: "#006f29",
                         mx: 'auto',
                         width: '40%',
                      }}
                    >
                      {offer.buttonText}
                    </Button>
            </Box>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};

export default OffersSlider;