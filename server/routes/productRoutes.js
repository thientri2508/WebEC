const express = require('express')
const router = express.Router()
const fileUpload = require('express-fileupload')
const path = require('path')
//const verifyToken = require('../middleware/auth')
const productController = require('../controllers/productController')

const assetsFolder = path.join(__dirname, "assets/ProductImage")

router.use(fileUpload())

// Route thêm sản phẩm mới
router.post('/', productController.createProduct);

//Route lấy hình ảnh sản phẩm
router.get('/file/:filename', (req, res) => { 
	const imagePath = path.join(__dirname, 'assets/ProductImage', req.params.filename);
  	res.sendFile(imagePath);
})

module.exports = router