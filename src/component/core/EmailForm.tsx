import React, { useRef, useState } from 'react';
import { TextField, Button, Box, InputAdornment } from '@mui/material';
import { Person, Email } from '@mui/icons-material';
import { toast, ToastContainer } from 'react-toastify';
import emailjs from 'emailjs-com';
import 'react-toastify/dist/ReactToastify.css';
import { useEmailConfig } from '@/hooks/useEmailConfig';

const EmailForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const {emailConfig,loading,error} = useEmailConfig();
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const validateField = (name: string, value: string) => {
    let error = '';

    if (name === 'name' && !/^[A-Za-z ]+$/.test(value)) {
      error = 'El nombre solo puede contener letras y espacios.';
    } else if (name === 'email' && !/^\S+@\S+\.\S+$/.test(value)) {
      error = 'El correo electrónico no es válido.';
    } else if (name === 'message' && !value.trim()) {
      error = 'El mensaje no puede estar vacío.';
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({ ...prevValues, [name]: value }));
    validateField(name, value);
  };

  const isFormValid = () => {
    return Object.values(errors).every((error) => error === '') &&
           Object.values(formValues).every((value) => value.trim() !== '');
  };

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!emailConfig) {
      toast.error('Configuración de correo no disponible, contacta al administrador');
      return;
    }
    if (isFormValid()) {
      if (form.current) {
        try {
          await emailjs.sendForm(
            emailConfig.serviceId,
            emailConfig.templateId,
            form.current,
            emailConfig.userId 
          );
          toast.success(emailConfig.successMessage)
          setFormValues({
            name: '',
            email: '',
            message: '',
          });
        } catch (error) {
          toast.error(emailConfig.errorMessage)
        }
      }
    } else {
      toast.error('Por favor corrige los errores antes de enviar.');
    }
  };

  return (
    <>
      <Box component="form" ref={form} onSubmit={sendEmail} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Nombre Completo"
          name="name"
          value={formValues.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Person />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <TextField
          label="Correo Electrónico"
          name="email"
          value={formValues.email}
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Email />
              </InputAdornment>
            ),
          }}
          variant="outlined"
        />

        <TextField
          label="Mensaje"
          name="message"
          value={formValues.message}
          onChange={handleChange}
          error={!!errors.message}
          helperText={errors.message}
          fullWidth
          multiline
          rows={4}
          variant="outlined"
        />

        <Box sx={{ textAlign: 'center' }}>
          <Button
            type="submit"
            variant="contained"
            disabled={!isFormValid()}
            sx={{ backgroundColor: '#006f29', color: 'white', textTransform: 'none' }}
          >
            Enviar Mensaje
          </Button>
        </Box>
      </Box>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default EmailForm;