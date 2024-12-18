import AboutUsComponent from "@/component/aboutUs/AboutUsComponent";
import Footer from "@/component/core/footer/Footer";

const AboutUsPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <AboutUsComponent />
      </div>
      <Footer />
    </div>
  );
};

export default AboutUsPage;