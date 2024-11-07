const { Log } = require('../models'); // Đảm bảo import đúng model Log

// Hàm tạo log
const createLog = async (req, res) => {
    const { userId, actionType, description, severity, source } = req.body;

    try {
        // Tạo bản ghi log mới
        const newLog = await Log.create({
            user_id: userId,
            action: actionType,
            description: description,
            severity: severity,
            source: source,
        });

        // Trả về thông tin log mới được tạo
        res.status(201).json({
            success: true,
            message: 'Log created successfully!',
            log: newLog,
        });
    } catch (error) {
        console.error('Error creating log:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to create log',
            error: error.message,
        });
    }
};

// Xuất controller
module.exports = {
    createLog,
};
