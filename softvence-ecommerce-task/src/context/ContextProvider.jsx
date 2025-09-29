import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext();

const ProductProvider = ({children}) => {
    const [product,setproduct] = useState([])
    const [loading,setLoading] = useState(true)
        const [cart,setCart] = useState([])

    useEffect(()=> {
        fetch("/products.json")
        .then((res)=> res.json())
        .then((data)=> {
           setproduct(data);
           setLoading(false)
        }) 
    },[])
  const addToCart = (item) => {
    const existing = cart.find(
      i => i.id === item.id &&
        i.selectedColor?.name === item.selectedColor?.name &&
        i.selectedSize === item.selectedSize
    );

    if (existing) {
      setCart(cart.map(i =>
        i === existing ? { ...i, quantity: i.quantity + item.quantity } : i
      ));
    } else {
      setCart([...cart, item]);
    }
  };


return (
   <ProductContext.Provider value={{product,loading, cart,addToCart}}>
    {children}
   </ProductContext.Provider>
)

};
export default ProductProvider





