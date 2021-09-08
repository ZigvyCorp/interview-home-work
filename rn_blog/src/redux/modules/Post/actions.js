export const actionTypes = {
    REQUEST_ALL_POST: 'REQUEST_ALL_POST',
    RECEIVE_ALL_POST: 'RECEIVE_ALL_POST',
}

export const requestAllPost = () => ({
    type: actionTypes.REQUEST_ALL_POST,
});

export const receiveAllPost = payload => ({
    type: actionTypes.RECEIVE_ALL_POST,
    payload
});