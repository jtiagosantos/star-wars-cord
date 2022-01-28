import { useCallback } from 'react';
import { toast } from 'react-toastify';

interface promiseToastMessages {
  messagePending: string; 
  messageSuccess: string;
  messageError: string;
}

interface UseCustomToastData {
  successToast: (message: string) => void;
  errorToast: (message: string) => void;
  promiseToast: (promise: Promise<unknown> | (() => Promise<unknown>), {
    messagePending, messageSuccess, messageError,
  }: promiseToastMessages) => void;
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

  const promiseToast = useCallback((
    promise: Promise<unknown> | (() => Promise<unknown>), {
    messagePending, messageSuccess, messageError
  }: promiseToastMessages) => {
    toast.promise(
      promise,
      {
        pending: messagePending,
        success: messageSuccess,
        error: messageError,
      }, 
      {
        theme: 'colored',
        autoClose: 2200,
      }
    )
  }, []);

  return {
    successToast,
    errorToast,
    promiseToast,
  }
}