import { useEffect, useState } from "react";
import { Offer } from "@/domain/model/Offer";
import { getOfferUseCaseInstance } from "@/domain/usecase/offer/OfferUseCaseIntance";

export const useOffers = () => {
  const [offers, setOffers] = useState<Offer[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOffers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getOfferUseCaseInstance.execute();
      setOffers(data);
    } catch (err) {
      console.error("Error fetching offers:", err);
      setError("Error fetching offers.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOffers();
  }, []);

  return { offers, loading, error };
};