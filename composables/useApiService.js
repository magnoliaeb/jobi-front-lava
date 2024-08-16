import axios from 'axios';
export default function useApiService() {
  const { $swal } = useNuxtApp();


  function handleError(err) {
    if (err.response) {
      console.error('Error:', err.response.status, err.response.data);
    } else if (err.request) {
      console.error('Error de red:', err.message);
    } else {
      console.error('Error:', err.message);
    }
    return err.response?.data?.message || err.message;
  }

  async function apiRequest(method, url, params = {}, data = null) {
    try {
      const response = await axios({ method, url, params, data });
      return { data: response.data, error: null };
    } catch (err) {
      const errorMsg = handleError(err);
      console.log('Triggering SweetAlert with errorMsg:', errorMsg);
      $swal.fire({
        icon: 'error',
        title: '¡Error!',
        text: errorMsg,
        confirmButtonText: 'Aceptar',
        customClass: {
          confirmButton: 'btn btn-green', // Clase personalizada para el botón "OK"
        },
      });
      return { data: null, error: errorMsg };
    }
  }

  return {
    apiRequest,
  };
}
