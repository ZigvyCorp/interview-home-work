export const GET_POST_DETAIL = "GET_POST_DETAIL";
export const GET_POST_DETAIL_SAGA = "GET_POST_DETAIL_SAGE";

export function getPost(id: number) {
    return {
        type: GET_POST_DETAIL_SAGA,
        payload: { id }
    };
}