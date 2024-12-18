import { Testimonial } from "@/domain/model/Testimonials";
import { getTestimonialsUseCaseInstance } from "@/domain/usecase/testimonials/TestimonialsUseCaseInstance";
import { useEffect, useState } from "react";

export const useTestimonials = () => {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loadingTest, setLoading] = useState<boolean>(true);
    const [errorTest, setError] = useState<string | null>(null);
  
    const fetchTestimonials = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await getTestimonialsUseCaseInstance.execute();
        setTestimonials(data);
      } catch (err) {
        setError("Error fetching testimonials.");
      } finally {
        setLoading(false);
      }
    };
  
    useEffect(() => {
      fetchTestimonials();
    }, []);
  
    return { testimonials, loadingTest, errorTest };
  };