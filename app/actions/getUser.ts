import ApiInstance from "../requests/Gateway/Instance"

export const getUser = async () => {
    try {
        const data = await ApiInstance.get('users');
        return data.data;
    } catch (err) {
        console.error(err);
    }
}