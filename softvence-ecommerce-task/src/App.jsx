import { useContext,  } from 'react'

import './App.css'
import Navbar from './componenets/Navbar'
import ProductDetails from './componenets/ProductDetails'
import { ProductContext } from './context/ContextProvider'
import ProductDescription from './componenets/Description'
import Footer from './componenets/Footer'
import Header from './componenets/Header'

function App() {
 
  const {product} = useContext(ProductContext)
    console.log(product);
    
  

  return (
    <>
      <div className=' px-20'>
        <Navbar/>
         <Header/>
      <ProductDetails product={product}/>
      <ProductDescription/>
      <Footer/>
      </div>
    </>
  )
}

export default App
