import toast from 'react-hot-toast';
import { Renderable, ValueFunction, Toast } from 'react-hot-toast/dist/core/types';

export const API_URL =
  process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000'

// Handle Error messages
export const handleErrorMessage = (err: { response: { data: { message: any; error: any; }; }; message: any; error: any; }) =>
  err.response && (err.response.data.message || err.response.data.error)
    ? err.response.data.message || err.response.data.error
    : err.message || err.error;
// Success Alert
export const successAlert = (message: Renderable | ValueFunction<Renderable, Toast>)=> message && toast.success(message);
// Error Alert
export const errorAlert = (error: Renderable | ValueFunction<Renderable, Toast>) => error && toast.error(error);
