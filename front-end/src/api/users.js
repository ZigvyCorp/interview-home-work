export const getUserById = async (userId) => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(
      `http://localhost:8084/v1/api/users/${userId}`
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user by ID');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export const getAllUsers = async () => {
  // eslint-disable-next-line no-useless-catch
  try {
    const response = await fetch(`http://localhost:8084/v1/api/users`);
    if (!response.ok) {
      throw new Error('Failed to fetch users');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
