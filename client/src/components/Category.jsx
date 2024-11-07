import PropTypes from 'prop-types'

const Category = ({setIsOpen, isOpen}) => {

    const handleParentClick = (event) => {
        if (event.target === event.currentTarget) {
          if(isOpen) setIsOpen(false)
            else setIsOpen(true)
        }
    };

  if(isOpen) {
    return (
        <div className="fixed lg:hidden top-0 left-0 z-30 bg-bg-blur w-full h-full" onClick={handleParentClick}>
             <div className='absolute h-full left-0 w-[300px] bg-white z-40'></div>
        </div>
    )
  } else {
    return (<></>)
  }
    
}

Category.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    setIsOpen: PropTypes.func.isRequired,
};

export default Category