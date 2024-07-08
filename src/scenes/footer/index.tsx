import Logo from "@/assets/geosanLogo.png";

const currentYear: number = new Date().getFullYear();
const Footer = () => {
  return (
    <footer className="bg-primary-500 py-16 text-white">
      <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
        <div className="mt-1 basis-1/2 md:mt-0">
          <img alt="logo" src={Logo} width={80} />
          <p className="my-5">
          </p>
          <p>© GEOSAN PLAGAS LTDA {currentYear} TODOS LOS DERECHOS RESERVADOS.</p>
        </div>
        
        <div className="mt-5 basis-1/4 md:mt-0">
          <h4 className="font-bold">CONTACTARNOS</h4>
          <p className="my-5">INFO@GEOSANPLAGAS.CL</p>
          <p>+56942880670</p>
          <p>+56942880679</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;