import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { useEffect, useState } from 'react'
import Navbar from '../scenes/navbar';
import Footer from '../scenes/footer';
import { motion } from "framer-motion";
import rata from "@/assets/mouse_test.png";
import plan_image from "@/assets/b2fd7a99-b1bc-473e-b9f2-e39393d1795a_media-libre-aspect-ratio_default_0.webp";
type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
};

const Desrratizado = ({ selectedPage, setSelectedPage }: Props) => {

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
        isAboveMediumScreens ? (
          <section
            id="servicios"
            className="gap-16  py-40 md:h-full md:pb-0"
            
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
                    <h1 className="text-center "> <strong>DESRRATIZACION</strong></h1>

                    <p className='mt-4'>
                      Tiene por finalidad controlar la población de roedores evitando
                      que se produzcan anidamientos y propagación de la plaga.
                      Asi disminuyendo los riesgos y daños tales como: <strong> enfermedades,
                      estructurales, eléctricos, contaminación de materias primas
                      y productos terminados.
                    GEOSAN PLAGAS LIMITADA</strong>  cuenta con profesionales
                      de gran experiencia y competencias para realizar excautivas
                      inspecciones para recomendar y dar soluciones a nuestros clientes.
                      Para esto utilizamos productos de última generación
                      y sistemas de captura según sea la planificación.
                    </p>
                  </div>

                </motion.div>
              </div>

              <div className="z-10 mt-24 md:basis-5/6">
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
                      src={plan_image} width={500}
                      alt="Imagen"
                    />
                  </div>
                  <div className="mx-auto w-6/6">
                    <img
                      src={rata} width={500}
                      alt="Imagen"
                    />
                  </div>

                </motion.div>
              </div>

            </motion.div>


            <Footer />

          </section>
        ) : (
          <section
            id="servicios"
            className="gap-16 bg-white py-20 md:h-full md:pb-0"

          >
            <div className="mx-auto w-full max-w-full text-black text-lg">
              <motion.div
                className="mx-auto w-5/6 items-center justify-center md:flex md:h-1/6  mt-8"
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
                    <h1 className=" mt-12"> <strong>DESRRATIZACION</strong></h1>

                    <p className='mt-5'>
                      Tiene por finalidad controlar la población de roedores evitando
                      que se produzcan anidamientos y propagación de la plaga.
                      Asi disminuyendo los riesgos y daños tales como: <strong> enfermedades,
                      estructurales, eléctricos, contaminación de materias primas
                      y productos terminados.
                    GEOSAN PLAGAS LIMITADA</strong>  cuenta con profesionales
                      de gran experiencia y competencias para realizar excautivas
                      inspecciones para recomendar y dar soluciones a nuestros clientes.
                      Para esto utilizamos productos de última generación
                      y sistemas de captura según sea la planificación.
                    </p>
                  </div>

                </motion.div>
              </div>
    
                <div className="z-10 md:basis-5/6 mb-8">
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
                    <div className="mx-auto w-full">
                      <img
                        src={plan_image}
                        alt="Imagen"
                      />
                    </div>
    
                  </motion.div>
                </div>
    
              </motion.div>
    
            </div>
    
            <Footer />

          </section>
        )
      }

    </div>
  )
}
export default Desrratizado