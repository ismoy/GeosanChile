import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomeScreen from "@/screen/home/HomeScreen";
import { AboutUsScreen} from "@/screen/aboutUs/AboutUsScreen";
import { DesrratizadoScreen } from "@/screen/Services/DesrratizadoScreen";
import { SanitizadoScreen } from "@/screen/Services/SanitizadoScreen";
import { DesinsectadoScreen } from "@/screen/Services/DesinsectadoScreen";
import { ControldeavesScreen } from "@/screen/Services/ControldeavesScreen";
import { AsesoresConsultoresScreen } from "@/screen/Services/AsesoresConsultoresScreen";
import { ContactUsScreen } from "@/screen/contactUs/ContactUsScreen";

export const Navegation = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
      </Routes>
      <Routes>
        <Route path="/nosotros" element={<AboutUsScreen />} />
      </Routes>
      <Routes>
        <Route path="/desrratizado" element={<DesrratizadoScreen />} />
      </Routes>
      <Routes>
        <Route path="/sanitizado" element={<SanitizadoScreen />} />
      </Routes>
      <Routes>
        <Route path="/desinsectado" element={<DesinsectadoScreen />} />
      </Routes>
      <Routes>
        <Route path="/controldeaves" element={<ControldeavesScreen />} />
      </Routes>
      <Routes>
        <Route path="/asesores/consultores/auditores" element={<AsesoresConsultoresScreen />} />
      </Routes>
      <Routes>
        <Route path="/contacto" element={<ContactUsScreen/>}/>
      </Routes>
      
    </Router>
  );
};

export default Navegation;
