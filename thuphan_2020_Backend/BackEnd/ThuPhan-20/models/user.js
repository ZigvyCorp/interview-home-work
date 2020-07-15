module.exports = function(sequelize, Datatypes) {
    var User = sequelize.define('User', {
        id: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: Datatypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: Datatypes.STRING,
            allowNull: false
        },
        name: {
            type: Datatypes.STRING,
            allowNull: false
        },
        dob: {
            type: Datatypes.DATE,
            allowNull: false
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return User;
}