export const fetchPostsApi = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    return data;
  };
  
  export const fetchPostApi = async postId => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts/${postId}`
    );
    const data = await response.json();
    return data;
  };
  export const fetchUSers = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/users`
    );
    const data = await response.json();
    return data;
  };

  export const fetchComments = async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/comments`
    );
    const data = await response.json();
    return data;
  };