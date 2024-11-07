const { Category } = require('../models')

// Hàm kiểm tra dữ liệu đầu vào
const validateCategoryData = (data) => {
    const { name } = data;

    if (!name || typeof name !== 'string') {
        return 'Tên danh mục là bắt buộc và phải là chuỗi';
    }

    return null;
};

//Hàm lấy danh sách tất cả danh mục
const getAllCategories = async (req, res) => {
  try {
    // Lấy tất cả danh mục từ cơ sở dữ liệu
    const categories = await Category.findAll();

    // Trả về danh sách danh mục
    res.status(200).json({ success: true, categories });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};


// Hàm tạo danh mục mới
const createCategory = async (req, res) => {
  try {
    const { name, parent_id } = req.body;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    const validationError = validateCategoryData(req.body); 
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError }); // 400: Bad Request
    }
    
    // Tạo danh mục mới với các thông tin từ yêu cầu
    const newCategory = await Category.create({
      name,
      parent_id
    });

    // Trả về thông tin danh mục mới vừa được tạo
    res.status(201).json({ success: true, message: 'Category Success!', newCategory });
  } catch (error) {
    console.error('Error creating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

// Hàm cập nhật danh mục
const updateCategory = async (req, res) => {
  try {
    const { id } = req.params; // Lấy id từ tham số URL
    const { name, parent_id } = req.body;

    // Kiểm tra tính hợp lệ của dữ liệu đầu vào
    const validationError = validateCategoryData(req.body);
    if (validationError) {
      return res.status(400).json({ success: false, message: validationError }); // 400: Bad Request
    }

    // Tìm kiếm danh mục theo id
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' }); // 404: Not Found
    }

    // Cập nhật thông tin danh mục
    category.name = name;
    category.parent_id = parent_id;

    // Lưu lại thay đổi
    await category.save();

    // Trả về thông tin danh mục đã được sửa
    res.status(200).json({ success: true, message: 'Category updated successfully!', category });
  } catch (error) {
    console.error('Error updating category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

const deleteCategory = async (req, res) => {
  try {
    const { id } = req.params; // Lấy id từ tham số URL

    // Tìm danh mục theo ID
    const category = await Category.findByPk(id);
    if (!category) {
      return res.status(404).json({ success: false, message: 'Category not found' }); // 404: Not Found
    }

    // Xóa danh mục
    await category.destroy();

    // Trả về thông báo thành công
    res.status(200).json({ success: true, message: 'Category deleted successfully!' });
  } catch (error) {
    console.error('Error deleting category:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
};

module.exports = {
  getAllCategories,
  createCategory,
  updateCategory,
  deleteCategory,
};
