import { SelectedPage } from '@/shared/types';
import { useEffect, useState } from 'react'
import Navbar from '../navbar';
import Footer from '../footer';
import { motion } from "framer-motion";
import CardDesrratizadoService from '@/hooks/CardDesrratizadoService';
import termitas from "@/assets/termitas-soldado.png";
import arañas from "@/assets/arana.png";
import moscas from "@/assets/mosca.png";
import Avispas from "@/assets/avispa.png";
import Chinches from "@/assets/chinche.png";
import Polillas from "@/assets/mariposa.png";
import Hormigas from "@/assets/hormiga.png";
import Pulgas from "@/assets/pulga.png";
import Zancudos from "@/assets/mosquito.png";
import chinche_del_arce from "@/assets/chinche_del_arce.webp";
import useMediaQuery from '@/hooks/useMediaQuery';
type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
};

const Desinsectado = ({ selectedPage, setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");


    const cardData = [

        { title: "Termitas", image: `${termitas}` },
        { title: "Arañas", image: `${arañas}` },
        { title: "Moscas", image: `${moscas}` }
        , { title: "Avispas", image: `${Avispas}` },
        { title: "Chinches", image: `${Chinches}` },
        { title: "Polillas", image: `${Polillas}` },
        { title: "Hormigas", image: `${Hormigas}` },
        { title: "Pulgas", image: `${Pulgas}` },
        { title: "Zancudos", image: `${Zancudos}` },

    ]


    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

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
                                <h1 className="text-center mt-12"> <strong>DESISINSECTACION</strong></h1>

                                <p className='mt-4'>
                                    Tiene por finalidad eliminar plagas rastreras y voladoras de
                                    manera mecánica, natural y químicamente.
                                    GEOSAN PLAGAS LIMITADA cuenta con productos,
                                    Maquinarias de ultima generación y profesionales
                                    De alto nivel y experiencia, para darte el mejor servicio a tus
                                    Problemas.
                                </p>
                            </div>

                            <div className="flex flex-wrap justify-center">
                                {cardData.map((card, index) => (
                                    <CardDesrratizadoService key={index} title={card.title} image={card.image} />
                                ))}
                            </div>
                        </motion.div>
                    </div>

                    <div className="z-10 mt-0 md:basis-5/6">
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
                                    src={chinche_del_arce}
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
                    className="gap-16  py-20 md:h-full md:pb-0"
    
                >
                    <motion.div
                        className="mx-auto w-full md:flex md:h-1/6  mt-12"
                        onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}>
    
    
                        <div className="z-10 mb-3 md:basis-5/6 ">
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
                                    <h1 className="mt-8"> <strong>DESISINSECTACION</strong></h1>
    
                                    <p className='mt-8'>
                                        Tiene por finalidad eliminar plagas rastreras y voladoras de
                                        manera mecánica, natural y químicamente.
                                        GEOSAN PLAGAS LIMITADA cuenta con productos,
                                        Maquinarias de ultima generación y profesionales
                                        De alto nivel y experiencia, para darte el mejor servicio a tus
                                        Problemas.
                                    </p>
                                </div>
    
                                <div className="flex flex-wrap w-full">
                                    {cardData.map((card, index) => (
                                        <CardDesrratizadoService key={index} title={card.title} image={card.image} />
                                    ))}
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
                                        src={chinche_del_arce}
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
export default Desinsectado
