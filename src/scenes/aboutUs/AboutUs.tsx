import { SelectedPage } from '@/shared/types';
import Navbar from '../navbar';
import useMediaQuery from '@/hooks/useMediaQuery';
import { motion } from "framer-motion";
import { useEffect, useState } from 'react';
import AboutUsCard from '@/hooks/AboutUsCard';
import Logo from "@/assets/geosanLogo.png";
import Footer from '../footer';

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
};
const AboutUS = ({ selectedPage, setSelectedPage }: Props) => {


    const data = [
        {
            title: "CONOCE SOBRE NOSOTROS",
            description: "En GEOSAN PLAGAS LTDA. un gran equipo de profesionales te entregara el mejor plan de soluciones que complementara el resultado de los más exigentes procesos productivos, seguridad sanitaria a los trabajadores y medio ambiente.Los comienzos de Geosan Plagas datan de inicios del año 1990, tiempo en el cual se integra en el mercado de control de plagas y gestión integral de higiene ambiental. El origen de la empresa dice relación con la oportunidad comercial y de una urgente necesidad de un buen servicio sobre control de plagas, con una visión más crítica de los objetivos. Los resultados del ejercicio de Geosan Plagas, desde sus comienzos han sido notablemente positivos, cubriendo las necesidades de grandes empresas A partir del año 2012, debido a la imperiosa necesidad del mercado, la empresa crea una división dedicada específicamente a la Consultoría General de Higiene Ambiental, denominada GEOSAN Chile, conformada por profesionales de alta competencia; prevencionista de riesgo, bioquímico, auditor de normas de calidad, ingeniero agrónomo entre otros.",
            image: `url(${Logo})`,
        },
        {
            title: "MISIÓN",
            description: "Establecer sistemas de control y gestión basados en la experiencia de más de 30 años al servicio y en la aplicación de las exigentes normas que regulan la seguridad sanitaria en las más variadas áreas de la producción, desde la perspectiva nacional e internacional, aportando al aseguramiento de la salud y de la economía, bajo el compromiso de superar los estándares tradicionales de calidad.",
            image: "imagen2.jpg",
        },
        {
            title: "VISIÓN",
            description: "Alcanzar liderazgos que nos permitan establecernos como la empresa con el mejor equipo de profesionales al servicio de un mundo globalizado y cada día más demandante de mejoras continuas en la calidad de servicios.",
            image: "imagen3.jpg",
        }
    ];



    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Nosotros);
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
                className="gap-16 bg-white py-20 md:h-full md:pb-0"

            >
                <motion.div
                    className="mx-auto w-5/6 items-center justify-start md:flex md:h-5/6 mt-8"
                    style={{ backgroundImage: `url(${Logo})`, backgroundSize: 'cover' }}
                    onViewportEnter={() => setSelectedPage(SelectedPage.Servicios)}
                >
                    <div className="relative w-full" style={{ height: '300px' }}>
                        <div className="absolute inset-0 bg-black opacity-60 flex flex-col justify-center items-start p-8">
                            <h1 className="text-5xl text-white mb-4">Control de Plagas</h1>
                            <p className="text-3xl text-white">
                                Mejorar constantemente en nuestros servicios es el principal objetivo la fidelidad con la calidad
                            </p>
                        </div>
                    </div>
                </motion.div>
                <div className="App">
                    <AboutUsCard data={data} />
                </div>
                <Footer />

            </section>
                ):(
                    <section
                id="servicios"
                className="gap-16 bg-white py-20 md:h-full md:pb-0">
                <div className="App">
                    <AboutUsCard data={data} />
                </div>
                <Footer />

            </section>
                )
            }
        </div>
    )
}
export default AboutUS

