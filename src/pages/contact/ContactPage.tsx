import ContactComponent from "@/component/contact/ContactComponent";
import Footer from "@/component/core/footer/Footer";

const ContactPage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <div className="flex-grow flex items-center justify-center">
        <ContactComponent />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;