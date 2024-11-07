import FbIcon from '../assets/icon-fb.png'
import TwitterIcon from '../assets/icon-twitter.png'
import PinterestIcon from '../assets/icon-pinterest.png'
import InsIcon from '../assets/icon-ins.png'
import banner2 from '../assets/banner2.jpg'
import banner3 from '../assets/banner3.jpg'
import banner4 from '../assets/banner4.jpg'
import ItemProduct from '../components/ItemProduct'
import { useState, useEffect, useRef} from 'react'
const HomePages = () => {

  const products = [
    { name: 'Piqué Biker Jacket', price: 345000, img: 'sp2.jpg'},
    { name: 'Multi-pocket Chest Bag', price: 445000, img: 'sp2.jpg'},
    { name: 'Lether Backpack', price: 220000, img: 'sp2.jpg'},
    { name: 'T-shirt Contrast Pocket', price: 565000, img: 'sp2.jpg'}
  ]

  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null); // Sử dụng useRef để tham chiếu đến phần tử

  useEffect(() => {
    const handleScroll = () => {
      const sectionPosition = sectionRef.current.getBoundingClientRect().top;
      const scrollPosition = window.innerHeight; // Chiều cao của viewport

      // Kiểm tra khi vị trí của thẻ nằm trong vùng nhìn thấy của người dùng
      if (sectionPosition < scrollPosition - 50) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="w-full">
      <div className="bg-banner1 w-full h-[900px] bg-no-repeat bg-center bg-cover pt-[230px] mt-[80px]">
        <div className="text-[#e53637] ml-20 lg:ml-32 font-semibold tracking-widest">SUMMER COLLECTION</div>
        <div className="text-[48px] w-[400px] lg:w-[500px] ml-20 lg:ml-32 font-bold my-4 leading-tight">Fall - Winter Collections 2024</div>
        <p className="mt-10 w-[400px] ml-20 lg:ml-32 lg:w-[500px]">A specialist label creating luxury essentials. Ethically crafted with an unwavering
        commitment to exceptional quality.</p>
        <button className="mt-8 w-[230px] h-[52px] ml-20 lg:ml-32 bg-black text-white tracking-[4px]">SHOP NOW</button>
        <ul className='flex mt-[270px] lg:mt-[285px] gap-10 items-center ml-20 lg:ml-32'>
          <li><img src={FbIcon}></img></li>
          <li><img src={TwitterIcon} className='w-[22px] h-[22px]'></img></li>
          <li><img src={PinterestIcon} className='w-[24px] h-[24px]'></img></li>
          <li><img src={InsIcon}></img></li>
        </ul>
      </div>
      <div className="w-full">
        <div className="mt-28 flex flex-col flex-wrap items-center justify-center">
          <div className='h-[550px] lg:h-[440px] relative lg:scale-85 lg:ml-[350px] xl:scale-100 xl:ml-[450px]'>
            <img src={banner2}></img>
            <div className='font-semibold text-[36px] w-full lg:w-[300px] absolute top-[455px] lg:top-28 lg:left-[-180px] xl:left-[-210px]'>Clothing Collections 2030</div>
            <div className='text-[13px] tracking-[4px] font-semibold absolute top-[520px] lg:top-60 lg:left-[-180px] xl:left-[-210px] cursor-pointer'>SHOP NOW</div>
          </div>
          <div className='h-[540px] mt-[40px] lg:ml-[-500px] lg:mt-[-130px] lg:scale-85 xl:scale-100 xl:ml-[-700px] xl:mt-[-80px]'>
            <img src={banner3}></img>
            <div className='font-semibold text-[36px] w-[300px] mt-4'>Accessories</div>
            <div className='text-[13px] tracking-[4px] font-semibold cursor-pointer mt-4'>SHOP NOW</div>
          </div>
          <div className='h-[550px] lg:h-[440px] relative mt-[80px] lg:ml-[470px] lg:mt-[-390px] lg:scale-85 xl:scale-100 xl:ml-[650px] xl:mt-[-350px]'>
            <img src={banner4}></img>
            <div className='font-semibold text-[36px] w-full lg:w-[300px] absolute top-[455px] lg:top-32 lg:left-[-50px] xl:left-[-170px]'>Shoes Spring 2030</div>
            <div className='text-[13px] tracking-[4px] font-semibold absolute top-[520px] lg:top-64 lg:left-[-50px] xl:left-[-170px] cursor-pointer'>SHOP NOW</div>
          </div>
        </div>

        

        <div ref={sectionRef}  className={`flex flex-col items-center m-auto mt-28 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-40'
        }`}>
          <h1 className='text-[23px] w-[70%] font-bold m-auto text-center'>THỜI TRANG HOT NHẤT</h1>
          <ul className="flex flex-wrap justify-around gap-5 mt-10">
            { products.map(product => (<ItemProduct key={product.name} name={product.name} price={product.price} img={product.img}></ItemProduct>)) }
          </ul>
        </div>
      </div>
      
      <div className="bg-[#f3f2ee] w-full h-[600px] pt-[150px] pl-28 mt-28">

      </div>

    </div>
  )
}

export default HomePages