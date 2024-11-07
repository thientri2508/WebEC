import logo from '../assets/logo.png'
import PropTypes from 'prop-types'

const Header = ({setIsOpen, isOpen}) => {

  return (
    <div className="top-0 lg:top-[40px] w-full h-[90px] bg-white fixed z-10 flex justify-around pl-10 items-center transition-all">
      <div className="cursor-pointer flex-shrink-0 h-full flex items-center"><img src={logo}></img></div>
      <ul className="hidden lg:flex gap-10 text-lg">
        <li className="category">ÁO NAM</li>
        <li className="category">QUẦN NAM</li>
        <li className="category">PHỤ KIỆN</li>
        <li className="category">GIÀY DÉP</li>
        <li className="category">BLOG</li>
      </ul>
      
      <div><input type="search" className='hidden outline-none border-solid border-2 pl-10 py-2 lg:block lg:w-48 xl:w-64 focus:shadow-custom-shadow-inp focus:border-sky-200 transition-all'></input></div>
      <div className='w-[40px] h-[40px] border-solid border-black border-[1px] py-[11px] cursor-pointer rounded lg:hidden' onClick={() => { isOpen?setIsOpen(false): setIsOpen(true)}}>
        <div className='w-[55%] m-auto border-solid border-black border-[2px]'></div>
        <div className='w-[55%] m-auto border-solid border-black border-[2px] mt-[3px]'></div>
        <div className='w-[55%] m-auto border-solid border-black border-[2px] mt-[3px]'></div>
      </div>

     
    </div>
  )
}

Header.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  setIsOpen: PropTypes.func.isRequired,
};

export default Header