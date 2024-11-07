module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
        id: {
            type: DataTypes.STRING(8),
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: false,
        },
        discounted_price: {
            type: DataTypes.DECIMAL(10, 2),
            allowNull: true,
        },
        status: {
            type: DataTypes.ENUM('new', 'discount', 'limited', 'bestseller'),
            allowNull: false,
            defaultValue: 'new',
        },
        color: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        material: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        form: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        size_type: {
            type: DataTypes.ENUM('freesize', 'letter', 'number'),
            allowNull: false,
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
    tableName: 'products',
    underscored: true, // Để tự động chuyển đổi camelCase thành snake_case trong database
    timestamps: false, // Bỏ qua việc tự động thêm createdAt và updatedAt
  });

  return Product;
};
  