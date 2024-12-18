import { AboutUsResponse } from "@/domain/model/AboutUs";
import { getAboutUsUseCaseInstance } from "@/domain/usecase/aboutUs/AboutUseUseCaseInstance";
import { useEffect, useState } from "react";

export const useAboutUs = () => {
    const [aboutUs, setAboutUs] = useState<AboutUsResponse>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchAboutUs = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getAboutUsUseCaseInstance.execute();
        setAboutUs(data);
      } catch (err) {
        setError("Error fetching aboutUs."+err);
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchAboutUs();
    }, []);
  
    return { aboutUs, loading, error };
  };