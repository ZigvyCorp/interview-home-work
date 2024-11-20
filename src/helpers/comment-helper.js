import { deserializeMap } from './object-helper';

export function getCommentsArray(postId, serializedCommentsData) {
  const commentsDataMap = deserializeMap(serializedCommentsData);
  const array = [];
  if (commentsDataMap.size > 0) {
    for (const value of commentsDataMap.values()) {
      if (value.postId === +postId) {
        array.push(value);
      }
    }
  }
  return array;
}
