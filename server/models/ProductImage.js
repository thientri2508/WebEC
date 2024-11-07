module.exports = (sequelize, DataTypes) => {
    const ProductImage = sequelize.define("ProductImage", {
        product_id: {
            type: DataTypes.STRING(8),
            allowNull: false,
        },
        image_url: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        display_order: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
  }, {
    tableName: 'products_images',
    underscored: true, 
    timestamps: false,
  });

  ProductImage.removeAttribute('id');

  return ProductImage;
};
  