const User = require('../models/user.model')
const axios = require('axios')

const updateData = () => {
  try {
    axios
    .get('https://jsonplaceholder.typicode.com/users')
    .then(async (response) => {
      for (let user of response.data) {
        await User.create({_id: user.id, ...user})
      }
      console.log('Data updated successfully')
    })
    .catch((error) => console.error('Error:', error))
  } catch (error) {
    console.log(error)
  }
}
module.exports = {
  updateData,
}
