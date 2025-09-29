import React, { useContext, useState } from 'react'
import { FaCarAlt, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { ProductContext } from '../context/ContextProvider';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
     const { cart } = useContext(ProductContext);
     const navigate = useNavigate()
  return (
    <div>
      <nav className='bg-blue-900 p-4 flex flex-col md:flex-row md:justify-between items-center text-white gap-3 md:gap-0'>
        <div>
            
            <h1 className='text-2xl font-bold uppercase'>  👻 Falcon</h1>
        </div>
        <div className='flex'>
            <input type="text" placeholder='search for anthing'  className='md:w-[500px]  py-2 md:px-2 rounded-l-md border-none focus:border-none focus:outliune-none bg-white text-gray-800' />
            <button className='bg-green-500 px-4 py-2 rounded-r-md text-white cursor-pointer'><FaSearch/></button>
        </div>
       <div className='flex items-center gap-5'>
           <div className=' relative'>
        <FaShoppingCart onClick={()=>navigate('/cart')} className='text-2xl font-bold cursor-pointer'/>
        {cart.length > 0 && (
          <span className='absolute top-0 right-[-10px] bg-red-600 text-white w-5 h-5 rounded-full flex items-center justify-center text-xs'>
            {cart.length}
          </span>
        )}
        
      </div>
      <FaUser className='text-2xl font-bold cursor-pointer'/>
       </div>
      </nav>
    </div>
  )
}

export default Navbar
