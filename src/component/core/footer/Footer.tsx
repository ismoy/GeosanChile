import React from 'react';

const Footer: React.FC = () => {
    const currentYear: number = new Date().getFullYear();
  return (
    <footer className="bg-primary-500  text-white py-6 mt-8">
      <div className="container mx-auto text-center">
        <p>Derechos de Autor &copy; {currentYear} Geosan plagas LTDA</p>
        <a href='mailto:contacto@inmotrust.cl' className='text-blue-500 underline'>info@geosanplagas.cl</a>
        <p>Contactarnos:</p>
        <div className="flex justify-center space-x-4 mt-2">
          <p  rel="noopener noreferrer">+56942880670</p>
          <p rel="noopener noreferrer">+56942880679</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;