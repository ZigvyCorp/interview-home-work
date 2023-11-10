import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class posts extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    owner: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'users',
        key: 'id'
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    create_at: {
      type: DataTypes.BIGINT,
      allowNull: true
    },
    tag: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'posts',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "posts_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
