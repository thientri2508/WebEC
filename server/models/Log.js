module.exports = (sequelize, DataTypes) => {
    const Log = sequelize.define("Log", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        user_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        action: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                isIn: [
                    ['user_action'], // Gộp các hành động người dùng
                    ['error_action']  // Gộp các hành động lỗi
                ],
            },
        },
        description: {
            type: DataTypes.STRING,
            allowNull: true, // Mô tả thêm cho hành động hoặc lỗi
        },
        severity: {
            type: DataTypes.ENUM('info', 'warning', 'error'), // Định nghĩa mức độ nghiêm trọng
            allowNull: false,
        },
        source: {
            type: DataTypes.STRING,
            allowNull: true, // Nguồn của hành động hoặc lỗi (ví dụ: tên hàm, module, hoặc route)
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
        tableName: 'logs', // Tên bảng trong cơ sở dữ liệu
        underscored: true, 
        timestamps: false, // Đã có created_at và updated_at
    });

    return Log;
};
