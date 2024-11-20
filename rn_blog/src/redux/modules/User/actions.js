export const actionTypes = {
    REQUEST_ALL_USER: 'REQUEST_ALL_USER',
    RECEIVE_ALL_USER: 'RECEIVE_ALL_USER',
}

export const requestAllUser = () => ({
    type: actionTypes.REQUEST_ALL_USER,
});

export const receiveAllUser = payload => ({
    type: actionTypes.RECEIVE_ALL_USER,
    payload
});