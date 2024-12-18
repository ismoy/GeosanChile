import { ServicesResponse } from "@/domain/model/Services";
import { getServicesUseCaseInstance } from "@/domain/usecase/services/ServicesUseCaseIntance";
import { useEffect, useState } from "react";

export const useServices = () => {
    const [services, setServices] = useState<ServicesResponse[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchServices = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getServicesUseCaseInstance.execute();
        setServices(data);
      } catch (err) {
        setError("Error fetching Services.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchServices();
    }, []);
  
    return { services, loading, error };
  };