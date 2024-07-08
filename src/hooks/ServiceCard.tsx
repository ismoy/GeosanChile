import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

// Service interface
interface IService {
    image: string;
    title: string;
    description: string;
  }
  const ServiceCard = ({ service,index }: { service: IService; index:number }) => {
    const navigate = useNavigate();
    const handleClick = () => {
      const routes = ["/desrratizado", "/sanitizado", "/desinsectado", "/controldeaves", "/asesores/consultores/auditores"];
      if (index >= 0 && index < routes.length) {
        navigate(routes[index]);
      }
    };
    
  
    return (
      <motion.div
      onClick={handleClick}
      className="max-w-sm w-full bg-pure-white cursor-pointer rounded-lg overflow-hidden shadow-lg m-4 px-6 border-t-8 border-blue-500 transition-transform transform hover:scale-105 hover:border-blue-color hover:shadow-xl flex flex-col items-center"
    >
      <img src={service.image} alt={service.title} className="w-24 h-24 mt-4" />
      <div className="px-6 py-4 w-full text-center">
        <div className="font-bold text-xl mb-2">{service.title}</div>
      </div>
    </motion.div>
    );
  
  };
  
  export default ServiceCard;
