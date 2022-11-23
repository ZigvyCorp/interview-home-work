import {BaseAction} from './BaseAction';
import {LoadingActionsType} from '../actionTypes';

const start = (payload?: any): BaseAction => ({
  type: LoadingActionsType.start,
  payload,
});

const stop = (payload?: any): BaseAction => ({
  type: LoadingActionsType.stop,
  payload,
});

const clear = (payload: any): BaseAction => ({
  type: LoadingActionsType.clear,
  payload,
});

export default {
  start,
  stop,
  clear,
};
