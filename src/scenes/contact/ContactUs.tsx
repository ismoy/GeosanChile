import { SelectedPage } from '@/shared/types';
import { useEffect, useState } from 'react'
import Footer from '../footer';
import Navbar from '../navbar';
import { ContactForm } from '@/hooks/ContactForm';

type Props = {
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void;
};
export const ContactUs = ({ selectedPage, setSelectedPage }: Props) => {
    const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY === 0) {
                setIsTopOfPage(true);
                setSelectedPage(SelectedPage.Contacto);
            }
            if (window.scrollY !== 0) setIsTopOfPage(false);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [setSelectedPage]);


  return (
    <div>
    <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
     
     <ContactForm setSelectedPage={setSelectedPage}/>
     <Footer/>
</div>
  )
}
