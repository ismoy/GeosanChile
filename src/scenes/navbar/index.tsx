import { useState } from "react";
import { Bars3BottomLeftIcon, ChevronDownIcon, XMarkIcon } from "@heroicons/react/24/solid";
import Logo from "@/assets/geosanLogo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
import whatsapp from "@/assets/boton-whatsapp.png";
type Props = {
  isTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const navbarBackground = isTopOfPage ? "" : "bg-primary-500 text-white";
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const numeroWhatsApp = "+56942880679";
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${numeroWhatsApp}`;
    window.open(whatsappUrl, '_blank');
  };

  const toggleServiceDropdown = () => {
    setIsServiceDropdownOpen(!isServiceDropdownOpen);
  };


  const services = [
    { title: "DESRRATIZADO", page: "DESRRATIZADO" },
    { title: "SANITIZADO", page: "SANITIZADO" },
    { title: "DESINSECTADO", page: "DESINSECTADO" },
    { title: "CONTROL DE AVES", page: "CONTROL DE AVES" },
    { title: "ASESORES / CONSULTORES", page: "ASESORES / CONSULTORES /AUDITORES" },
  ];

  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6 transition-all`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <img alt="logo" src={Logo} width={180} />

            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isTopOfPage={isTopOfPage}

                  />
                  <Link
                    page="Nosotros"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isTopOfPage={isTopOfPage}
                  />

                  <div className="relative">
                    <button
                      onClick={toggleServiceDropdown}
                      className={`rounded-full p-2 ${isTopOfPage ? "text-black" : "text-white"
                        }`}
                    >
                      Servicios
                      <ChevronDownIcon className="w-4 h-4 ml-1 inline-block" />
                    </button>
                    {isServiceDropdownOpen && (
                      <div className="absolute top-full left-0 bg-white text-black shadow-md rounded-md mt-1">
                        <ul className="p-8 my-1">
                          {services.map((service, index) => (
                            <li key={service.page}>
                              <Link
                                page={service.page}
                                selectedPage={selectedPage}
                                setSelectedPage={setSelectedPage}
                                isTopOfPage={isTopOfPage}
                              />
                              {/* Agregamos una línea horizontal después de cada servicio, excepto el último */}
                              {index !== services.length - 1 && (
                                <hr className="border-t border-primary-300 my-1" />
                              )}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>

                  <Link
                    page="Contacto"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                    isTopOfPage={isTopOfPage}
                  />
                  <p> <strong>Resolución sanitaria N° 2313175805 <br></br>18/05/2023</strong></p>
                </div>
                <div className={`${flexBetween} gap-8 cursor-pointer`} onClick={handleWhatsAppClick}>
                <img src={whatsapp} width={120}/>
                </div>
              </div>
            ) : (
              <button
                className={`rounded-full p-2 ${isTopOfPage ? "text-black" : "text-white"}`}
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3BottomLeftIcon className="h-6 w-" />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-500 drop-shadow-xl text-white rounded-md">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[20%] flex flex-col gap-10 text-2xl">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <Link
              page="Nosotros"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
            <div className="relative">
              <button
                onClick={toggleServiceDropdown}
                className={`rounded-full p-2 ${isTopOfPage ? "text-black" : "text-white"
                  }`}
              >
                Servicios
                <ChevronDownIcon className="w-4 h-4 ml-1 inline-block" />
              </button>
              {isServiceDropdownOpen && (
                <div className="absolute top-full right-20 bg-white text-black shadow-md rounded-md mt-1">
                  <ul className="p-3 my-1">
                    {services.map((service, index) => (
                      <li key={service.page}>
                        <Link
                          page={service.page}
                          selectedPage={selectedPage}
                          setSelectedPage={setSelectedPage}
                          isTopOfPage={isTopOfPage}
                        />
                        {/* Agregamos una línea horizontal después de cada servicio, excepto el último */}
                        {index !== services.length - 1 && (
                          <hr className="border-t border-primary-300 my-1" />
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            <Link
              page="Contacto"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
              isTopOfPage={isTopOfPage}
            />
             <p> <strong>Resolución sanitaria N° 2313175805 <br></br>18/05/2023</strong></p>

          </div>
          <div className={`${flexBetween} gap-8 cursor-pointer mt-12 ml-20`} onClick={handleWhatsAppClick}>
                <img src={whatsapp} width={120}/>
                </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;