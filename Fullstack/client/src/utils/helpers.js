import { toast } from 'react-toastify';
import moment from "moment";
import { Modal } from 'antd';
import { ExclamationCircleFilled } from '@ant-design/icons';
const { confirm } = Modal;

export const slugify = text =>
    text
        .toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .split(' ')
        .join('-')

export const formatPrice = (price) => Number(price.toFixed(1)).toLocaleString()
export const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
};

export const formatCreatedAt = (time) => {
    return moment(time).format(
        "DD/MM/YYYY "
    )
}

export const toastSucess = (msg) => {

    return toast.success(msg, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}
export const toastError = (msg) => {

    return toast.error(msg, {
        position: "top-right",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
    });
}

export const showDeleteConfirm = (title, handleDelete) => {
    confirm({
        title: `Do you want to delete ${title}`,
        icon: <ExclamationCircleFilled />,
        okText: 'Yes',
        okType: 'danger',
        cancelText: 'No',
        onOk() {
            handleDelete()
        },
        onCancel() {
            console.log('Cancel');
        },
    });
};

export const scrollUp = () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}