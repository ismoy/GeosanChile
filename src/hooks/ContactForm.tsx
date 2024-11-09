import useMediaQuery from './useMediaQuery';
import { SelectedPage } from "@/shared/types";
import { motion } from "framer-motion";
import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import AlertWithProgress from '@/shared/AlertWithProgress';




type Props = {
    setSelectedPage: (value: SelectedPage) => void;
  };

export const ContactForm =({ setSelectedPage }: Props) => {
    const isAboveMediumScreens = useMediaQuery("(min-width:1060px)");
    const form = useRef<HTMLFormElement>(null);
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [isSuccess, setIsSuccess] = useState(true);
  
    const [formValues, setFormValues] = useState({
      from_name: '',
      from_email: '',
      message: '',
      phone: ''
    });
    const [errors, setErrors] = useState({
      from_name: '',
      from_email: '',
      message: '',
    });

    const validate = () => {
      let tempErrors = { from_name: '', from_email: '', message: '' };
      let isValid = true;
  
      // Validación de nombre: solo letras y espacios
      if (!/^[A-Za-z ]+$/.test(formValues.from_name)) {
        tempErrors.from_name = 'El nombre solo puede contener letras y espacios.';
        isValid = false;
      }
  
      // Validación de correo electrónico
      if (!/^\S+@\S+\.\S+$/.test(formValues.from_email)) {
        tempErrors.from_email = 'El correo electrónico no es válido.';
        isValid = false;
      }
  
      // Validación de mensaje: no debe estar vacío
      if (!formValues.message.trim()) {
        tempErrors.message = 'El mensaje no puede estar vacío.';
        isValid = false;
      }
  
      setErrors(tempErrors);
      return isValid;
    };


    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const { name, value } = e.target;
      setFormValues({ ...formValues, [name]: value });
    };
  

    const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
  
      // Verificar que form.current no es null
      if(validate()){
         if (form.current) {
        emailjs.sendForm('service_66rqisr', 'template_j9fn7os', form.current, 'wJeJL6ZZJSNqCDVG4')
          .then((result) => {
            console.log('Email successfully sent!', result.text);
            setIsSuccess(true);
            setAlertMessage('Su mensaje ha sido enviado exitosamente.'); 
            setShowAlert(true);
          }, () => {
            setShowAlert(true);
            setIsSuccess(false);
            setAlertMessage('Hubo un error al enviar el mensaje.'); 
          });
      }
    };
  }
     
  
  

  return (
   <>
   {
    isAboveMediumScreens?(
      <section id="contactos" className="gap-16 bg-white py-10 md:h-full md:pb-0">
      <motion.div
      className="mx-auto w-10/12 items-center justify-start md:flex md:h-6/6 py-20 mt-20"
      
        onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}
      >
         <div className="z-10 mt-32 md:basis-full">
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
             <div className='flex justify-center items-center'>
             {showAlert && <AlertWithProgress setShowAlert={setShowAlert} message={alertMessage} isSuccess={isSuccess} />}
             </div>
             <form ref={form} onSubmit={sendEmail}>
                <div className="mx-auto w-full bg-primary-300 bg-opacity-60 rounded-lg p-4 mt-4 ml-5">
                 <h2 className="text-white text-lg">
                     Nombre
                     <p className="text-error py-2" style={{ display: "inline" }}>*</p>
                 </h2>
                 <input className={`w-full px-3 py-2 rounded-md border ${errors.from_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
                 type="text" name='from_name' value={formValues.from_name}
                 onChange={handleChange}
                 placeholder="Ingrese su nombre"
                 />
                 {errors.from_name && <p className="text-error">{errors.from_name}</p>}
               <div>
   
              <h2 className="text-white text-lg mt-4">
             Correo Electrónico
             <p className="text-error py-2" style={{ display: "inline" }}>*</p>
             </h2>
                 <input className={`w-full px-3 py-2 rounded-md border ${errors.from_email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
                 type="email" name='from_email' value={formValues.from_email}
                 onChange={handleChange}
                 placeholder="Ingrese su correo electrónico"
                 />
                  {errors.from_email && <p className="text-error">{errors.from_email}</p>}
               </div>
           
                
               <div>
             <h2 className="text-white text-lg mt-4">
                  Teléfono
              </h2>
              <input
              className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
              type="number" name="phone" value={formValues.phone}
              onChange={handleChange}
              placeholder="opcional" 
              />
             </div>
                 <div>
                       <h2 className="text-white text-lg mt-4">
                     Mensaje
                     <p className="text-error py-2" style={{ display: "inline" }}>*</p>
                     </h2>
                 <textarea className={`w-full px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
   
                  placeholder="Escriba su mensaje aquí" name='message' value={formValues.message}
                  onChange={handleChange}
                 />
                 {errors.message && <p className="text-error">{errors.message}</p>}
                 </div>
                 <button
                 className="bg-primary-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-600"
                 type="submit"
                 >
                 Enviar
                 </button>
             </div>
             </form>
              
           </motion.div>
            </div>
          
         
     
      </motion.div>  
       
    </section>
    ):(
      <section id="contactos" className="gap-16 bg-white py-1 md:h-full md:pb-0">
      <motion.div
      className="mx-auto w-full items-center justify-start md:flex md:h-6/6 mt-12"
      
        onViewportEnter={() => setSelectedPage(SelectedPage.Contacto)}
      >
         <div className="z-10 mt-32 md:basis-full mx-auto w-full mb-8">
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
             <div className='flex justify-center items-center'>
             {showAlert && <AlertWithProgress setShowAlert={setShowAlert} message={alertMessage} isSuccess={isSuccess} />}
             </div>
             <form ref={form} onSubmit={sendEmail}>
                <div className="mx-auto w-full bg-primary-300 bg-opacity-60 rounded-lg p-4 mt-4">
                 <h2 className="text-white text-lg">
                     Nombre
                     <p className="text-error py-2" style={{ display: "inline" }}>*</p>
                 </h2>
                 <input className={`w-full px-3 py-2 rounded-md border ${errors.from_name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
                 type="text" name='from_name' value={formValues.from_name}
                 onChange={handleChange}
                 placeholder="Ingrese su nombre"
                 />
                 {errors.from_name && <p className="text-error">{errors.from_name}</p>}
               <div>
   
              <h2 className="text-white text-lg mt-4">
             Correo Electrónico
             <p className="text-error py-2" style={{ display: "inline" }}>*</p>
             </h2>
                 <input className={`w-full px-3 py-2 rounded-md border ${errors.from_email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
                 type="email" name='from_email' value={formValues.from_email}
                 onChange={handleChange}
                 placeholder="Ingrese su correo electrónico"
                 />
                  {errors.from_email && <p className="text-error">{errors.from_email}</p>}
               </div>
           
                
                 <div>
                 <h2 className="text-white text-lg mt-4">
                     Teléfono
                 </h2>
                 <input
                 className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-primary-500"
                 type="tel"
                 placeholder="opcional" value={formValues.phone}
                 />
                 </div>
                 <div>
                       <h2 className="text-white text-lg mt-4">
                     Mensaje
                     <p className="text-error py-2" style={{ display: "inline" }}>*</p>
                     </h2>
                 <textarea className={`w-full px-3 py-2 rounded-md border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:border-primary-500`}
   
                  placeholder="Escriba su mensaje aquí" name='message' value={formValues.message}
                  onChange={handleChange}
                 />
                 {errors.message && <p className="text-error">{errors.message}</p>}
                 </div>
                 <button
                 className="bg-primary-500 text-white py-2 px-4 mt-4 rounded-md hover:bg-primary-600"
                 type="submit"
                 >
                 Enviar
                 </button>
             </div>
             </form>
              
           </motion.div>
            </div>
          
         
     
      </motion.div>  
       
    </section>
    )
   }
   </> 
  
  )
}
