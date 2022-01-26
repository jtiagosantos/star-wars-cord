import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface UseCustomToastData {
  successToast: (message: string) => void;
  errorToast: (message: string) => void;
}

export function useCustomToast(): UseCustomToastData {
  const successToast = useCallback((message: string) => {
    toast.success(message, { 
      theme: 'colored',
      autoClose: 3000,
    })
  }, []);

  const errorToast = useCallback((message: string) => {
    toast.error(message, { 
      theme: 'colored',
      autoClose: 3000,
    })
  }, []);

  return {
    successToast,
    errorToast,
  }
}