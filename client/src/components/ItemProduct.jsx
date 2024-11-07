import PropTypes from 'prop-types'

const ItemProduct = ({name, price, img}) => {

  return (
    <div className="w-[280px] flex flex-col items-center">
        <img src={`http://localhost:5000/api/upload/file/${img}`} className='w-full cursor-pointer'></img>
        <div className='mt-8 cursor-pointer'>{name}</div>
        <div className='mt-2 text-[18px] font-semibold'>{price.toLocaleString('vi-VN')} đ</div>
    </div>
  )
}

ItemProduct.propTypes = {
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    img: PropTypes.string.isRequired,
};

export default ItemProduct