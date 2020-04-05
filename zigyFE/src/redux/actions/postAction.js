
export function getPostWatcher() {
    return { type: 'GETPOST_WATCHER' };
  }
  
export function updatePost(data) {
    return { type: 'UPDATE_POST', payload: data };
  }

export function createPostWatcher(data) {
    return { type: 'CREATEPOST_WATCHER', payload: data };
  }

export function getPostByKeywordWatcher(keyword){
    return {type: 'GETPOSTBYKEYWORD_WATCHER', payload: keyword}
}