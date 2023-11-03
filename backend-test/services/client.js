const axios = require('axios');

module.exports = class ClientService{
    static async get(endpoint){
        try {
          const response = await axios.get(endpoint);
          console.log(response.data);
          return response.data;
        } catch (error) {
            console.log(`Could not fetch data ${error}`)
        }
    } 
}
