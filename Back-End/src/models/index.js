const fetchData = (url) => fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    return data;
  })
  .catch(error => {
    throw error;
  });

module.exports = fetchData;