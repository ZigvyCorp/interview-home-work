module.exports = function(sequelize, Datatypes) {
    var Post = sequelize.define('Post', {
        id: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        owner: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'Users',
                key: 'ID'
            }
        },
        title: {
            type: Datatypes.STRING,
            allowNull: false
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: false
        },
        tags: {
            type: Datatypes.STRING,
            allowNull: false
        }
    }, {
        timestamps: false
    });

    return Post;
}