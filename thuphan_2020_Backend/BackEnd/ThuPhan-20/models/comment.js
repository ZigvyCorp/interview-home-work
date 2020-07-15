module.exports = function(sequelize, Datatypes) {
    var Comment = sequelize.define('Comment', {
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
        post: {
            type: Datatypes.INTEGER(11),
            allowNull: false,
            references: {
                model: 'Posts',
                key: 'ID'
            }
        },
        content: {
            type: Datatypes.TEXT,
            allowNull: false
        },
        created_at: {
            type: Datatypes.DATE,
            allowNull: false
        },
    }, {
        timestamps: false
    });

    return Comment;
}