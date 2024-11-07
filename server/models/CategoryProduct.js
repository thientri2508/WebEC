module.exports = (sequelize, DataTypes) => {
    const CategoryProduct = sequelize.define("CategoryProduct", {
        category_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        product_id: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
  }, {
    tableName: 'categories_products',
    underscored: true, 
    timestamps: false,
  });

  CategoryProduct.removeAttribute('id');

  return CategoryProduct;
};
  