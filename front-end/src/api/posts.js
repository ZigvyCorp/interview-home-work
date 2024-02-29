export const getAllPosts = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch('http://localhost:8084/v1/api/posts');
    // console.log(response);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPostById = async (id) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`http://localhost:8084/v1/api/posts/${id}`);
    if (!response.ok) {
      throw new Error('Failed to fetch post by ID');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getCommentsByPostId = async (postId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(
      `http://localhost:8084/v1/api/comments/${postId}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch comments by post ID');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllComments = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`http://localhost:8084/v1/api/comments`);
    if (!response.ok) {
      throw new Error('Failed to fetch comments');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getPostsByKeyword = async (keyword) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`http://localhost:8084/v1/api/posts/search?keyword=${keyword}`);
    if (!response.ok) {
      throw new Error('Failed to fetch posts');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

