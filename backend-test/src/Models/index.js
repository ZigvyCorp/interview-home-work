import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('db_test_project', 'root', '1234', {
    host: 'localhost',
    port: '3306',
    dialect: 'mysql'
});

export default sequelize;