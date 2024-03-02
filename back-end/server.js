const app = require('./src/app');
const {port} = require('./src/configs/config-mongodb');

const server = app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});