import { EmailConfig } from "@/domain/model/EmailConfig";
import { getEmailConfigUseCaseInstance } from "@/domain/usecase/emailConfig/EmailConfigUseCaseInstance";
import { useEffect, useState } from "react";

export const useEmailConfig = () => {
    const [emailConfig, setEmailConfig] = useState<EmailConfig>();
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
  
    const fetchEmailConfig = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getEmailConfigUseCaseInstance.execute();
        setEmailConfig(data);
      } catch (err) {
        console.error("Error fetching emailConfig:", err);
        setError("Error fetching emailConfig.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchEmailConfig();
    }, []);
  
    return { emailConfig, loading, error };
  };