export const actionTypes = {
    REQUEST_ALL_COMMENT: 'REQUEST_ALL_COMMENT',
    RECEIVE_ALL_COMMENT: 'RECEIVE_ALL_COMMENT',
}

export const requestAllComment = () => ({
    type: actionTypes.REQUEST_ALL_COMMENT,
});

export const receiveAllComment = payload => ({
    type: actionTypes.RECEIVE_ALL_COMMENT,
    payload
});