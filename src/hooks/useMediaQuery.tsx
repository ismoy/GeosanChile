import { useEffect, useState } from "react";

const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    // Función para actualizar el estado
    const updateMatches = () => {
      setMatches(media.matches);
    };

    // Llamamos a la función una vez para establecer el estado inicial
    updateMatches();

    // Agregar oyente de cambio de tamaño
    media.addEventListener("change", updateMatches);

    // Eliminar oyente al desmontar el componente
    return () => {
      media.removeEventListener("change", updateMatches);
    };
  }, [query]);

  // Devolver el estado de coincidencia como un valor booleano
  return matches;
};

export default useMediaQuery;
