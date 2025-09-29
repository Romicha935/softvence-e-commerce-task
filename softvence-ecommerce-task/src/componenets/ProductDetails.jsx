import React, {   useContext, useState } from 'react'
import {ProductContext} from '../context/ContextProvider'
import { FaStar } from 'react-icons/fa'
import { PiPackage } from 'react-icons/pi'
import { CiChat1 } from 'react-icons/ci'
import { IoChatboxEllipsesOutline } from 'react-icons/io5'

const ProductDetails = ({product}) => {
      const {addToCart} = useContext(ProductContext)
   
   const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] || null);

    const [quantity,setQuantity] = useState(1)
    const [selectedSize,setSelectedSize] = useState(product?.size?.[0] || null)
  const [mainImage, setMainImg] = useState(product?.images?.[0] || product?.mainImage);
  
  const [notification,setNotification] = useState("")

  const handleAddToCart = () => {
    addToCart({ ...product, selectedColor, selectedSize, quantity });
    setNotification(`${product.title} added to cart!`);
    setTimeout(() => setNotification(""), 3000);
  };

  return (
    <div className=' grid grid-cols-1 md:grid-cols-3 gap-9 p-6  w-full'>
        {/* left side img */}
     <div className='bg-white'>
        <img src={mainImage} alt="Main" className='w-full h-[500px] rounded-lg shadow' />
        <div className='flex items-center gap-2 mt-3'>
          {product?.images?.map((img,index) => (
            <img key={index} src={img} className='w-20 h-20 rounded border cursor-pointer hover:border-green-400' alt="" onClick={()=> setMainImg(img)} />
         
          ))}
        </div>

     </div>

     {/* center site */}
     <div>
        <h2 className='text-xl font-bold mb-2'>{product.title}</h2>
        <div className='flex gap-2 '>
            
        <span>{product.rating}  </span>
        <span className='flex items-center'>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
            <FaStar className='text-yellow-400'/>
        </span>
        <span>{product.reviews} </span>
        </div>
        <div className='flex mb-3 py-4 gap-4'>
            <span className='text-green-600 py-1 font-bold text-2xl'>৳{product.price}</span>
            <span className='line-through text-gray-300  text-2xl'>৳{product.oldPrice}</span>
        </div>
        <div>
            <p>Promotion <button className='bg-gradient-to-r from-orange-400 to-orange-700 text-white px-4'>{product.promotion}</button> </p>
        </div>
        <div className='mt-3'>
              <p className='text-gray-700 font-semibold'>Available Color</p>
 <div className='flex items-center gap-2 mt-4'>
  
  {product?.colors?.map((color, index) => (
  <img
    key={index}
    src={color.image}
    alt={color.name}
    className={`w-14 h-16 border rounded cursor-pointer ${
      selectedColor?.name === color.name ? "border-green-600" : ""
    }`}
    onClick={() => setSelectedColor(color)}
  />
))}
</div>
</div>

 <div className="mb-3">
          <p className="font-semibold">Select Size:</p>
          <div className="flex gap-2 mt-2">
            {product?.sizes?.map((size, index) => (
              <button
                key={index}
                className={`px-3 py-1 border rounded ${
                  selectedSize === size ? "bg-green-600 text-white" : ""
                }`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

          <div className="mb-4">
          <p className="font-semibold">Quantity:</p>
          <div className="flex items-center gap-2 mt-2">
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
            >
              -
            </button>
            <span>{quantity}</span>
            <button
              className="px-3 py-1 border rounded"
              onClick={() => setQuantity(quantity + 1)}
            >
              +
            </button>
          </div>
        </div>
          
            <button
          onClick={handleAddToCart}
          className="w-full bg-green-600 text-white py-2 cursor-pointer rounded-lg hover:bg-green-700"
        >
          Add to Cart
        </button>

        {notification && (
          <div className="mt-2 p-2 bg-green-100 text-green-800 border border-green-400 rounded">
            {notification}
          </div>
        )}
           
     </div>
  
  {/* right side */}
     <div className='w-2/3 ml-10 h-full space-y-3'>
         {/* Delivery */}
         <div className="mt-5 border p-3 border-rounded space-y-3 ">
           <p className="font-bold mb-2">Delivery Options</p>
           <p className='font-semibold flex items-center gap-3'><PiPackage className='text-green-500 text-2xl'/> Regular</p>
           <p className='text-sm'> {product?.delivery?.regular}</p>
         <div className='flex items-center gap-3 '>
              <span className='font-semibold text-xl text-gray-300'>Express </span>
              <p className='text-red-500 text-sm'>{product?.delivery?.express}</p>
         </div>
         
        </div>

         {/* Seller Info */}    
              <div className="mt-5  space-y-3 p-3 border border-rounded">
                <p className='text-sm'>Sold by</p>
                <p><button className='bg-purple-600 text-gray-300 text-xs px-4'>Registry Now</button></p>
                <div className='flex gap-4'>
                    <button className='bg-green-100 px-4 py-1 gap-2 flex items-center rounded-md'><IoChatboxEllipsesOutline /> Chat Now</button>
                    <button className='bg-gray-100 px-4 py-1  rounded-md'>view Shop</button>
                </div>
           <p className="font-semibold ml-4 text-gray-700 "> {product?.seller?.name}</p>
       <div className='flex items-center justify-around '>
            <span className=''>
            <p className='text-gray-400 text-sm'>Ship on Time:</p>
            <p className='text-gray-300 font-bold text-3xl'> {product?.seller?.shipOnTime}</p>
           </span>
           <span>
            <p className='text-gray-400 text-sm'>Chat Response:</p>
            <p className='text-gray-300 font-bold text-3xl'> {product?.seller?.chatResponse}</p>
           </span>
           <span>
            <p className='text-gray-400 text-sm'>Shop Rating:</p>
            <p className='text-gray-300 font-bold text-3xl'>{product?.seller?.rating}%</p>
           </span>
       </div>
          <p></p>
          <p> </p>
           <p> </p>
        </div>
     </div>

  
    </div>
  )
}







export default ProductDetails;
