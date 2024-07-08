import { Link as RouterLink, useNavigate } from "react-router-dom";
import { SelectedPage } from "@/shared/types";

type Props = {
  page: string;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
  isTopOfPage: boolean;
  to?: string;
};

export const Link = ({ page, selectedPage, setSelectedPage, isTopOfPage, to }: Props) => {
  const lowerCasePage = page.toLowerCase().replace(/ /g, "") as SelectedPage;
  const isScrolling = !isTopOfPage;
  const navigate = useNavigate();
  const handleClick = () => {
    if (!isTopOfPage) {
      // No hacer nada si no está en la parte superior de la página
      return;
    }

    setSelectedPage(lowerCasePage);

    // Realizar la navegación si es necesario
    if (to) {
      navigate(to);
    } else {
      navigate(`/${lowerCasePage}`);
    }
  };

  return (
    <RouterLink
    to={lowerCasePage === SelectedPage.Dashboard ? "/" : `/${lowerCasePage}`} // Navega a la raíz ("/") solo si es "Home", de lo contrario navega a la página correspondiente
    className={`transition duration-500 hover:text-primary-300 ${
        selectedPage === lowerCasePage
          ? isScrolling
            ? "text-red-500" // Texto en rojo durante el scroll
            : "text-blue-500" // Texto en azul después del scroll
          : ""
      }`}
      onClick={() => handleClick  }
     
    >
      {page}
    </RouterLink>
  );
};

export default Link;
