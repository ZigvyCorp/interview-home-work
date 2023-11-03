import api from '../../../../utils/apiUtils';
import * as ActionType from './types';

export const actDetailPage = (id) => {
  return (dispatch) => {
      dispatch(actDetailPageRequest());
      api.get(`api/post/detailPost/${id}`)
          .then((result) => {
              dispatch(actDetailPageSuccess(result.data))
          })
          .catch((error) => {
              dispatch(actDetailPageFail(error))
          })
  };
};

export const actDetailPageRequest = () => {
  return {
      type: ActionType.DETAIL_REQUEST,

  }
};

export const actDetailPageSuccess = (data) => {
  return {
      type: ActionType.DETAIL_SUCCESS,
      payload: data
  }
};

export const actDetailPageFail = (error) => {
  return {
      type: ActionType.DETAIL_FAIL,
      payload: error
  }
};