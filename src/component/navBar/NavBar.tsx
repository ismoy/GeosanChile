import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import useMediaQuery from "@mui/material/useMediaQuery";
import { alpha, useTheme } from "@mui/material/styles";
import geosanLogo from "../../assets/geosanLogo.webp"
import { createHoverStyle } from "@/component/core/styles";
import { Link } from "react-router-dom";
import ServicesMenu from "./ServicesMenu";

const Navbar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const toggleDrawer = (open: boolean) => () => {
    setIsDrawerOpen(open);
  };

  const menuItems = [
    { text: "Inicio", icon: <HomeIcon />, path: "/" },
    { text: "Sobre Nosotros", icon: <InfoIcon />, path: "/aboutUs" },
    { text: "Contacto", icon: <ContactMailIcon />, path: "/contact" },
  ];

  const renderMenuItems = () => (
    <Box>
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton
             component={Link}
             to={item.path} 
             onClick={toggleDrawer(false)}
                sx={{
                  "&:hover": {
                    backgroundColor: alpha("#006f29", 0.1),
                  },
                }}
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
         <Divider sx={{ my: 2 }} />
        {/* Services Menu Item */}
        <ListItem disablePadding>
          <ListItemButton
             sx={createHoverStyle("0, 111, 41", 0.1)}
          >
            <ListItemIcon
              sx={createHoverStyle("0, 111, 41", 0.1)}
            >
              <HomeIcon />
            </ListItemIcon>
            <ServicesMenu isMobile={isMobile} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider sx={{ my: 2 }} />
      <Box sx={{ px: 2 }}>
        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mb: 2,
            textAlign: "center",
          }}
        >
          Resolución sanitaria N° 2313175805 <br /> 18/05/2023
        </Typography>
        <Box
          sx={{
            position: "fixed",
            bottom: 16,       
            right: 16,        
            zIndex: 1300,   
          }}
        >
          <IconButton
            color="success"
            onClick={() => {
              const whatsappUrl = `https://wa.me/+56942880679`;
              window.open(whatsappUrl, "_blank");
            }}
            sx={{
              backgroundColor: "#006f29", // Fondo verde
              "&:hover": {
                backgroundColor: alpha("#006f29", 0.1),
              },
              color: "white", // Color del ícono
            }}
          >
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: "#006f29",
          "&:hover": {
            backgroundColor: "#006f40",
          },
        }}
        className="shadow-md"
      >
        <Toolbar className="flex justify-between">
          {/* Logo */}
          <Typography variant="h6" className="flex items-center">
            <img src={geosanLogo} alt="Geosan Logo" className="h-10 mr-2" />
          </Typography>

          {/* Menú Combinado */}
          <Box
            className="flex items-center gap-6"
            sx={{
              display: { xs: "none", md: "flex" },
            }}
          >
            {menuItems.map((item) => (
              <Button
                key={item.text}
                component={Link}
                to={item.path} 
                color="inherit"
                sx={{
                  textTransform: "none",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                  },
                }}
              >
                {item.text}
              </Button>
            ))}
            <ServicesMenu isMobile={isMobile} />
            <Typography variant="body2" className="text-white">
              Resolución sanitaria N° 2313175805 <br /> 18/05/2023
            </Typography>
            <Box
              sx={{
                position: "fixed",
                bottom: 16,        
                right: 16,          
                zIndex: 1300,      
              }}
            >
              <IconButton
                color="success"
                onClick={() => {
                  const whatsappUrl = `https://wa.me/+56942880679`;
                  window.open(whatsappUrl, "_blank");
                }}
                sx={{
                  backgroundColor: "#28a745",
                  "&:hover": {
                    backgroundColor: "#1e7e34", 
                  },
                  color: "white",
                }}
              >
                <WhatsAppIcon />
              </IconButton>
            </Box>
          </Box>

          {/* Ícono de menú hamburguesa */}
          <IconButton
            color="inherit"
            edge="end"
            onClick={toggleDrawer(true)}
            sx={{
              display: { xs: "block", md: "none" },
              "&:hover": {
                backgroundColor: "rgba(255, 255, 255, 0.1)",
              },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Drawer */}
      <Drawer anchor="bottom" open={isDrawerOpen} onClose={toggleDrawer(false)}>
        <Box
          sx={{
            width: "100%",
            px: 2,
            py: 3,
          }}
          role="presentation"
        >
          {renderMenuItems()}
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;