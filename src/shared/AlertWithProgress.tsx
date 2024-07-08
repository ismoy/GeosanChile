import React, { useState, useEffect } from 'react';

// Extendemos las props para incluir un mensaje y un estado de éxito
interface AlertWithProgressProps {
  setShowAlert: React.Dispatch<React.SetStateAction<boolean>>;
  message: string; // El mensaje a mostrar
  isSuccess: boolean; // Si es true, se muestra un mensaje de éxito; si es false, un mensaje de error
}

const AlertWithProgress: React.FC<AlertWithProgressProps> = ({ setShowAlert, message, isSuccess }) => {
  const [progress, setProgress] = useState(100);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isSuccess) {
      interval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress - 10;
          if (newProgress <= 0) {
            clearInterval(interval);
            setShowAlert(false); // Ocultar alerta y detener el intervalo
            return 0;
          }
          return newProgress;
        });
      }, 1000); // Actualiza el progreso cada segundo
    } else {
      // Si isSuccess es false, no necesitamos un intervalo
      setProgress(100);
      // Podemos configurar un temporizador para ocultar el mensaje de error después de un tiempo
      const timeout = setTimeout(() => {
        setShowAlert(false);
      }, 10000); // Ocultar después de 10 segundos

      return () => clearTimeout(timeout);
    }

    return () => {
      clearInterval(interval);
    };
  }, [setShowAlert, isSuccess]);

  // Determinar el color de fondo basado en si es un mensaje de éxito o error
  const bgColor = isSuccess ? 'bg-blue-color' : 'bg-red-500';

  return (
    <div className={`mx-auto w-10/12 p-4 ${bgColor} text-white flex flex-col justify-center items-center rounded-md`}>
      <p className="mb-4">{message}</p>
      {isSuccess && (
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div className="bg-primary-300 h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
        </div>
      )}
    </div>
  );
};

export default AlertWithProgress;
