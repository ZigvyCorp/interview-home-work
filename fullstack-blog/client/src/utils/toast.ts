import toast from "react-hot-toast";
export const toastError = (message: string) => {
	toast.error(message);
};
export const toastSuccess = (message: string) => {
	toast.success(message);
};
