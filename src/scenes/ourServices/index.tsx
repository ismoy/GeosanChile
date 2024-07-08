import ServiceCard from "@/hooks/ServiceCard";
import { SelectedPage } from "@/shared/types";
import auditor from "@/assets/auditor.png";
import paloma from "@/assets/paloma_fly.png";
import sanitizacion from "@/assets/sanitizacion.png";
import ratas from "@/assets/ratatizacion.png";
import bichos from "@/assets/bichos.png";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};
const services = [
    {
      image: `${ratas}`,
      title: "DESRRATIZADO",
      description: "Procedimiento regulado por decreto 157/05 del Ministerio de salud, orientado al control de roedores en industria de manufactura y de alimentos, comercio, sector residencial, áreas de servicios entre otras",
    },
    {
      image: `${sanitizacion}`,
      title: "SANITIZADO",
      description: "Tratamiento dirigido al control microorganismos patógenos en áreas sensibles, que exponen la salud de las personas y arriesgan procesos y productos de las más variadas áreas de la gran industria,comercio, servicios generales y de uso colectivo.",
    },
    {
        image: `${bichos}`,
        title: "DESINSECTADO:",
        description: "Procedimiento sanitario destinado al control de insectos, rastreros y voladores, que generan importante daño económico y ponen en grave riesgo la salud de las personas.",
      },
      {
        image: `${paloma}`,
        title: "CONTROL DE AVES",
        description: "Implementación de sistemas de control de aves (posamientos / anidamientos)",
      },
      {
        image: `${auditor}`,
        title: "ASESORES / CONSULTORES /AUDITORIAS",
        description: "Servicios que buscan entregar asesoría permanente, basada en la normativa vigente respecto de instalación de faenas, procesos de construcción y servicios tercerizados Privilegiando la protección a la salud de los trabajadores, evitar daños económicos en diferentes procesos productivos y de protección a la imagen corporativa.",
      },
     
  ];


const OurServices = ({}: Props) => {
const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <>
    {
      isAboveMediumScreens ?(
    <section id="ourServices" className="gap-16 bg-white py-10 md:h-2/6 md:pb-0 mb-4">
      <div className="mx-auto w-10/12 items-center text-center justify-center md:flex md:h-1/6 mt-8 bg-blue-color text-3xl text-white rounded-lg">
        Nuestros Servicios
      </div>
      <div className="flex flex-wrap justify-center mx-auto w-5/6">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
):(
        <section id="ourServices" className="gap-16 bg-white py-1 md:pb-0 mb-4">
        <div className="mx-auto w-full items-center text-center justify-center md:flex md:h-1/6 mt-2 bg-blue-color text-3xl text-white rounded-lg">
          Nuestros Servicios
        </div>
        <div className="flex flex-wrap justify-center mx-auto w-full">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </section>
      )
    }
    </>
   
  );
};

export default OurServices;