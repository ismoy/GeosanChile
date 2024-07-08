
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { useEffect, useState } from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import { motion } from "framer-motion";
import sanitizado from "@/assets/sanitizacion.webp";

type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
};

const Sanitizado = ({ selectedPage, setSelectedPage }: Props) => {


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
                    <h1 className="text-center mt-12"> <strong>SERVICIO DE SANITIZACIÓN</strong></h1>

                    <p className='mt-4'>
                      Tiene por finalidad eliminar microorganismos dañinos para
                      la salud, tales como: <strong>Hongos, Virus y Bacterias</strong>
                      en áreas sensibles que exponen la salud de las personas, arriesgando
                      procesos y producciones en las distintas áreas
                      de la industria, comercio, servicios generales, y de uso colectivo.
                      Para este servicio. <br></br> <strong>GEOSAN PLAGAS LIMITADA </strong> 
                      cuenta con productos de última generación a base
                      de amonios cuaternarios, maquinarias y profesionales con las
                      competencias que exige <strong>SEREMI DE SALUD</strong>.
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
                      src={sanitizado}
                      alt="Imagen" width={520}
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
            className="gap-16 bg-white py-20 md:h-full md:pb-0" >

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
                    <h1 className="mt-12"> <strong>SERVICIO DE SANITIZACIÓN</strong></h1>

                    <p className='mt-8'>
                      Tiene por finalidad eliminar microorganismos dañinos para
                      la salud, tales como: <strong>Hongos, Virus y Bacterias</strong>
                      en áreas sensibles que exponen la salud de las personas, arriesgando
                      procesos y producciones en las distintas áreas
                      de la industria, comercio, servicios generales,y de uso colectivo.
                      Para este servicio <strong>GEOSAN PLAGAS LIMITADA</strong>
                      cuenta con productos de última generación a base
                      de amonios cuaternarios, maquinarias y profesionales con las
                      competencias que exige <strong>SEREMI DE SALUD</strong>.
                    </p>
                  </div>

                </motion.div>
              </div>

                <div className="z-10 mb-8 md:basis-5/6">
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
                        src={sanitizado}
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
export default Sanitizado

