module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define("Category", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        parent_id: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        created_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        }, 
        updated_at: {
            type: DataTypes.DATE,
            defaultValue: DataTypes.NOW,
        },
  }, {
    tableName: 'categories',
    underscored: true, 
    timestamps: false,
  });

  return Category;
};
  