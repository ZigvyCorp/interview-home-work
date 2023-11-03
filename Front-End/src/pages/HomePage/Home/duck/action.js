import api from '../../../../utils/apiUtils';
import * as ActionType from './types';

export const actTopMovie = (page) => {
    return (dispatch) => {
        dispatch(actTopMovieRequest());
        api.get(`api/post/getpaging/${page}`)
            .then((result) => {
                dispatch(actTopMovieSuccess(result.data))
            })
            .catch((error) => {
                dispatch(actTopMovieFail(error))
            })
    };
};

export const actTopMovieRequest = () => {
    return {
        type: ActionType.TOPMOVIE_REQUEST,
    }
};

export const actTopMovieSuccess = (data) => {
    return {
        type: ActionType.TOPMOVIE_SUCCESS,
        payload: data
    }
};

export const actTopMovieFail = (error) => {
    return {
        type: ActionType.TOPMOVIE_FAIL,
        payload: error
    }
};