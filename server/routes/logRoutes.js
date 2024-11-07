const express = require('express')
const router = express.Router()
//const verifyToken = require('../middleware/auth')
const logController = require('../controllers/logController');

// Route tạo log mới
router.post('/', logController.createLog);

module.exports = router