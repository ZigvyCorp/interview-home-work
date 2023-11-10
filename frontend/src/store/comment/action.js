import { CREATE_COMMENT } from "./actionTypes";

export const createComment = (formData) => ({
    type: CREATE_COMMENT,
    payload: formData
});