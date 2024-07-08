import React from "react";
import { motion } from "framer-motion";
import useMediaQuery from "./useMediaQuery";
interface ICard {
  title: string;
  description: string;
}

interface ICardListProps {
  data: ICard[];
}



const AboutUsCard: React.FC<ICardListProps> = ({ data }) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    return (
      <div>
         {
         isAboveMediumScreens ?(
          <div className="mx-auto w-10/12 max-w-full text-black text-lg py-20">
          <h1 className="py-2 text-center">Sobre Nosotros</h1>
          <div className="px-6 py-2 border-t-2 gray-700"></div>
    
          <div className="mx-auto w-full justify-center">
            {data.map((card, index) => (
              <motion.div
                key={index}
                className={`z-10 mt-10  border-gray-300 shadow-sm rounded-md py-3 transition-transform transform hover:scale-105 hover:border-blue-color hover:shadow-xl 
                 
                `}
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
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
         ):(
          <div className="mx-auto w-full max-w-full text-black text-lg py-1">
          <h1 className="mt-12 text-1xl text-center"> <strong>Sobre Nosotros</strong></h1>    
          <div className="mx-auto w-full">
            {data.map((card, index) => (
              <motion.div
                key={index}
                
              >
                <motion.div
                  className="md:-mt-1 w-full p-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                  <div className="mx-auto w-full max-w-full text-black text-lg mt-0">
                    <h1> <strong>{card.title}</strong></h1>
                    <div>
                      <p>{card.description}</p>
                    </div>
                  </div>
                </motion.div>
                <motion.div
                  className="md:-mt-2 w-full p-2"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                >
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
         )
         }
      
      </div>
      
    );
  };
  
  
  export default AboutUsCard;

