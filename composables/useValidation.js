// composables/useValidation.js
export default function useValidation() {
    const rules = {
      required:  (value) => !!value || 'Este campo es obligatorio.',
      email: (value) => /.+@.+\..+/.test(value) || 'Introduce un correo electrónico válido.',
    //   phoneNumber: () => [
    //     (value) => /^\d{10}$/.test(value) || 'El número de teléfono debe tener 10 dígitos.',
    //   ],
      minLength: (length) => 
        (value) => (value && value.length >= length) || `El campo debe tener al menos ${length} caracteres.`,
     
    };
  
    return {
      rules,
    };
  }
  