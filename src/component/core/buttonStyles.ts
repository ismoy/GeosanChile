import { alpha } from "@mui/material/styles";

export const serviceButtonStyle = (isMobile: boolean) => ({
  color: isMobile ? "text.primary" : "white",
  textTransform: "none", // Sin capitalización
  "&:hover": {
    backgroundColor: alpha("#006f29", 0.1), // Fondo transparente
  },
  justifyContent: isMobile ? "flex-start" : "center",
  width: isMobile ? "100%" : "auto",
  margin: 0,
  padding: isMobile ? 0 : "6px 16px",
});