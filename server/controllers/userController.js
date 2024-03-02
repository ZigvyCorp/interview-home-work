const { default: axios } = require("axios");

const getUsers = async (req, res) => {
  const { id } = req.params;

  const { data: users } = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return res.json({
    user: users,
  });
};

module.exports = {
  getUsers,
};
