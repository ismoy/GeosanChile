import { SelectedPage } from "@/shared/types";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
import OurServices from "../ourServices";
import Footer from "../footer";
import Dashboard from "../dashboard/Dashboard";


type Props = {
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void;
};
const Home = ({selectedPage, setSelectedPage }: Props) => {

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Dashboard);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [setSelectedPage]);

  return (
    <div className="app bg-gray-20">
      <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <Dashboard setSelectedPage={setSelectedPage} />
      <OurServices setSelectedPage={setSelectedPage} /> 
      <Footer />
    </div>
  );
};

export default Home;