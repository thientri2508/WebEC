const { Product } = require('../models')
const { CategoryProduct } = require('../models')
const { ProductImage } = require('../models')
const generateRandomId = require('../utils/generateRandomId')

// Hàm kiểm tra dữ liệu đầu vào
const validateProductData = (data) => {
    const { name, price } = data;

    if (!name || typeof name !== 'string') {
        return 'Tên sản phẩm là bắt buộc và phải là chuỗi';
    }
    if (price === undefined || typeof price !== 'number' || price < 0) {
        return 'Giá sản phẩm phải là số dương';
    }

    return null;
};

// Hàm tạo sản phẩm mới
const createProduct = async (req, res) => {
  try {
    const { name, description, price, discounted_price, status, color, material, form, size_type, categories, images } = req.body;
    const product_id = generateRandomId();

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    const validationError = validateProductData(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError }); // 400: Bad Request
    }
    
    // Tạo sản phẩm mới với các thông tin từ yêu cầu
    const newProduct = await Product.create({
      id: product_id,
      name,
      description,
      price,
      discounted_price,
      status,
      color,
      material,
      form,
      size_type
    });

    // Thiết lập danh mục cho sản phẩm
    if(categories.length != 0){
      const categories_products = categories.map(category => ({
        category_id: category,
        product_id,
      })); 

      await CategoryProduct.bulkCreate(categories_products)
    }

    // Tạo các hình ảnh cho sản phẩm
    if(images.length != 0){
      const imageProductData = images.map(image => ({
        product_id,
        image_url: image.image_url,
        display_order: image.display_order,
      }));

      await ProductImage.bulkCreate(imageProductData);
    }

    // Trả về thông tin sản phẩm mới vừa được tạo
    res.status(201).json({ success: true, message: 'Product Success!', newProduct });
  } catch (error) {
    console.error('Error creating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  createProduct,
};
