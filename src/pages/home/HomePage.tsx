import Footer from "@/component/core/footer/Footer";
import OffersSlider from "@/component/core/OfferSlider";
import HomeComponent from "@/component/home/HomeComponent";
import { useOffers } from "@/hooks/useOffers";
import { Box, CircularProgress, Typography } from "@mui/material";
import { toast, ToastContainer } from "react-toastify";


const HomePage: React.FC = () => {
  const { offers, loading, error } = useOffers();

  if (loading) {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
        <CircularProgress />
      </Box>
    );
  }
  if (!offers) {
    return (
      toast.error('Error! No se pudieron cargar las ofertas '+error)
    );
  }

  if (error) {
    return (
      toast.error('Error! No se pudieron cargar las ofertas '+error)
    );
  }

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Usa el slider pasando todas las ofertas */}
      <Box sx={{ mt: 4 }}>
        <OffersSlider offers={offers} slidesToShow={1} />
      </Box>

      <div className="flex-grow flex items-center justify-center">
        <HomeComponent />
      </div>
      <Footer />
      <ToastContainer />
    </div>
  );
};

export default HomePage;