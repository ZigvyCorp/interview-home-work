const { default: axios } = require("axios");

const getUserById = async (req, res) => {
  const { id } = req.params;

  const { data: users } = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  return res.json({
    user: users,
  });
};

module.exports = {
  getUserById,
};
