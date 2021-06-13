const axios = require('axios');

function axiosTest() {
    const promise = axios.get('https://jsonplaceholder.typicode.com/posts')

    // using .then, create a new promise which extracts the data
    const dataPromise = promise.then((response) => response.data)

    console.log(dataPromise)

    return dataPromise
}

exports.userControllers = (req, res) => {
    axiosTest().then(data => {
        res.json({
            postsList: data
        });
        // console.log(data);
    }).catch((err) => { console.log(err);})


};

