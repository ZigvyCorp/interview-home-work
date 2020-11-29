import { LOAD_POST } from './constants';

export function loadPost(data) {
  return {
    type: LOAD_POST,
    data,
  };
}
