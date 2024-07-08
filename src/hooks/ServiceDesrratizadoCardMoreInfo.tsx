import React from "react";
import { motion } from "framer-motion";
interface ICard {
  title: string;
  description: string;
  image: string;
}

interface ICardListProps {
  data: ICard[];
}
const ServiceDesrratizadoCardMoreInfo: React.FC<ICardListProps> = ({ data }) => {
    return (
      <div className="mx-auto w-10/12 max-w-full text-black text-lg py-10">
        <h1 className="py-2 text-center">¿Dónde realizamos nuestros servicios de desinsectación?</h1>
        <div className="px-6 py-2 border-t-2 gray-700"></div>
  
        <div className="mx-auto w-full justify-center">
          {data.map((card, index) => (
            <motion.div
              key={index}
              className={`z-10 mt-10 flex border border-gray-300 shadow-sm rounded-md py-3 transition-transform transform hover:scale-105 hover:border-blue-color hover:shadow-xl ${
                index === 1 ? 'flex-row-reverse': ''  // Invertir el orden para el segundo elemento
              }`}
            >
              <motion.div
                className="md:-mt-20 w-full p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="mx-auto w-full max-w-full text-black text-lg mt-20">
                  <h1 className="text-center">{card.title}</h1>
                  <div className="">
                    <p style={{ paddingLeft: '10px' }}>{card.description}</p>
                  </div>
                </div>
              </motion.div>
              <motion.div
                className="md:-mt-20 w-full p-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: 50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <div className="mx-auto w-full max-w-full mt-24">
                  <img src={card.image} alt="Imagen" />
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    );
  };
  export default ServiceDesrratizadoCardMoreInfo
