import { toast, ToastOptions, TypeOptions } from 'react-toastify';

export const useToast = () => {
    return (content: string, type: TypeOptions, timeClose?: number, configs?: ToastOptions) =>
        toast(content, {
            type: type,
            autoClose: timeClose ?? 1000,
            ...configs,
        });
};
