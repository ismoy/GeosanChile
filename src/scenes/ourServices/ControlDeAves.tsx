
import useMediaQuery from '@/hooks/useMediaQuery';
import { SelectedPage } from '@/shared/types';
import { useEffect, useState } from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import { motion } from "framer-motion";
import palomas from "@/assets/invasion_palomas.webp";
type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
};

const ControlDeAves = ({ selectedPage, setSelectedPage }: Props) => {
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
                    <h1 className="text-center mt-12"> <strong>CONTROL DE PALOMAS</strong></h1>

                    <p className='mt-4'>
                      Dentro de las enfermedades más conocidas podemos mencionar:   

                       <strong> infecciones pulmonar, sistema nervioso central,
                      además de salmonelosis, neumonitis, etc. </strong>
                      
                     <br></br> Es por eso que en  <strong>GEOSAN PLAGAS LTDA</strong> nos ocupamos del
                      problema, realizando diversos sistemas antiposamiento
                      de manera que estas aves no nos contaminen y provoquen daños
                      estructurales, enfermedades como las mencionadas
                      que puedan llevar en muchos casos hasta lamentar la muerte.
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
                      src={palomas}
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
          className="gap-16  py-20 md:h-full md:pb-0"

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
                  <h1 className="mt-12"> <strong>CONTROL DE PALOMAS</strong></h1>

                  <p className='mt-8'>
                    Dentro de las enfermedades más conocidas podemos mencionar:
                    <strong>
                      infecciones pulmonar, sistema nervioso central,
                    además de salmonelosis, neumonitis, etc.
                    </strong>
                    
                    Es por eso que en <strong>GEOSAN PLAGAS LTDA</strong> nos ocupamos del
                    problema, realizando diversos sistemas antiposamiento
                    de manera que estas aves no nos contaminen y provoquen daños
                    estructurales, enfermedades como las mencionadas
                    que puedan llevar en muchos casos hasta lamentar la muerte.
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
                    src={palomas}
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
export default ControlDeAves


