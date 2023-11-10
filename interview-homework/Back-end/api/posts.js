const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/api/posts', async (req, res) => {
  try {
    const response = await axios.get(`${BASE_URL}/posts`);
    res.json(response.data);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;
