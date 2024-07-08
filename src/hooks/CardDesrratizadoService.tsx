import { motion } from "framer-motion";

interface CardProps {
  title: string;
  image: string;
}

const CardDesrratizadoService: React.FC<CardProps> = ({ title, image }) => {
  return (
    <motion.div
      className="mt-8"
    >
      <div className="flex items-center justify-center mt-5">
        <img src={image} alt={title} className="w-10 h-auto" />
      </div>
      <div className="px-6 py-2">
        <div className=" text-md text-black">{title}</div>
      </div>
    </motion.div>
  );
};

export default CardDesrratizadoService;

