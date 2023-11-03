import ApiInstance from "../requests/Gateway/Instance"

export const getComments = async (id: string) => {
    try {
        const data = await ApiInstance.get(`posts/${id}/comments`);
        return data;
    } catch (err) {
        console.error(err);
    }
}