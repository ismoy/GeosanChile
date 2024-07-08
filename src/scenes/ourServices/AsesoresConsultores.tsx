import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import  { useEffect, useState } from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import { motion } from "framer-motion";
import plan_image from "@/assets/b2ap3_large_cambiar-asesoria-miedos.webp";
type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
};

const AsesoresConsultores = ({ selectedPage, setSelectedPage }: Props) => {
  
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Servicios);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setSelectedPage]);

    return (
        <div>
          <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
         {
          isAboveMediumScreens ?(
            <section
            id="servicios"
            className="gap-16 bg-white py-40 md:h-full md:pb-0"
            
          >
              
              <motion.div
                className="mx-auto w-10/12 items-center justify-center md:flex md:h-1/6 mb-2"
                onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
                  
    
                <div className="z-10 mb-40 md:basis-5/6 ">
                  <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}>
                    <div className="mx-auto w-5/6 text-black text-lg">
                    <h1 className="text-center mt-8"> <strong> ASESORES/CONSULTORES Y AUDITORES</strong></h1>

                      <p className='mt-4'>
                      Servicios que buscan entregar asesoría permanente, basada en la normativa vigente respecto de instalación de faenas, procesos de construcción y servicios tercerizados Privilegiando la protección a la salud de los trabajadores, evitar daños económicos en diferentes procesos productivos y de protección a la imagen corporativa.
                      Servicio de verificación sobre cumplimiento de normas sanitarias y propuestas de mejoras que regulan los lugares de trabajo y el Medio ambiente (AIB INTERNATIONAL; DECRETO 504/99, 977/96 Y 157/05) entre otras normativas vigentes en materia documental y de procedimientos según protocolos establecidos orientados a elevar estándares de calidad.
                      </p>
                    </div>
    
                  </motion.div>
                </div>
    
                <div className="z-10 mt-32 md:basis-5/6">
                  <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="mx-auto w-6/6">
                      <img
                        src={plan_image}
                        alt="Imagen"
                      />
                    </div>
    
                  </motion.div>
                </div>
    
              </motion.div>
    
    
            <Footer />
    
          </section>
          ):(
            <section
            id="servicios"
            className="gap-16 bg-white py-20 md:h-full md:pb-0"
            
          >
            <motion.div
                className="mx-auto w-full items-center justify-center md:flex md:h-1/6  mt-12 mb-2"
                onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
                  
    
                <div className="z-10 mb-8 md:basis-5/6 ">
                  <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}>
                    <div className="mx-auto w-full text-black text-lg">
                    <h1 className="mt-8"> <strong> ASESORES/CONSULTORES Y AUDITORES</strong></h1>

                      <p className='mt-8'>
                      Servicios que buscan entregar asesoría permanente, basada en la normativa vigente respecto de instalación de faenas, procesos de construcción y servicios tercerizados Privilegiando la protección a la salud de los trabajadores, evitar daños económicos en diferentes procesos productivos y de protección a la imagen corporativa.
                      Servicio de verificación sobre cumplimiento de normas sanitarias y propuestas de mejoras que regulan los lugares de trabajo y el Medio ambiente (AIB INTERNATIONAL; DECRETO 504/99, 977/96 Y 157/05) entre otras normativas vigentes en materia documental y de procedimientos según protocolos establecidos orientados a elevar estándares de calidad.
                      </p>
                    </div>
    
                  </motion.div>
                </div>
    
                <div className="z-10 mt-2 md:basis-5/6">
                  <motion.div
                    className="md:-mt-20"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5 }}
                    variants={{
                      hidden: { opacity: 0, x: -50 },
                      visible: { opacity: 1, x: 0 },
                    }}
                  >
                    <div className="mx-auto w-full mb-8">
                      <img
                        src={plan_image}
                        alt="Imagen"
                      />
                    </div>
    
                  </motion.div>
                </div>
    
              </motion.div>
    
    
            <Footer />
    
          </section>
          )
         }

  </div>
    )
}
export default AsesoresConsultores



