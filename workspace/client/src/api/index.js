export const fetchPosts = async (limit, skip) => {
  const response = await fetch(`/api/v1/posts?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};
export const fetchPost = async (id) => {
  const response = await fetch(`/api/v1/posts/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }
  return await response.json();
};

export const fetchComments = async (limit, skip,postId) => {
  const response = await fetch(`/api/v1/posts/${postId}/comments?limit=${limit}&skip=${skip}`);
  if (!response.ok) {
    throw new Error("Failed to fetch comments");
  }
  return await response.json();
};

