const express = require('express')
const router = express.Router()
//const verifyToken = require('../middleware/auth')
const categoryController = require('../controllers/categoryController');

//Route lấy danh sách tất cả danh mục
router.get('/', categoryController.getAllCategories)

// Route thêm danh mục mới
router.post('/', categoryController.createCategory);

//Route cập nhật danh mục
router.put("/:id", categoryController.updateCategory)

//Route xóa danh mục
router.delete("/:id", categoryController.deleteCategory)

module.exports = router