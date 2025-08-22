import { createContext, useContext, useState } from "react";


const CartContext = createContext()


export const CartProvider=(({children})=>{

    const[cartItems,setCartItems]=useState([])

    const addItems=(item)=>{
        setCartItems([...cartItems,item])

    }
    
    const removeItems=(itemToRemove)=>{
        setCartItems(cartItems.filter((apple)=>apple!=itemToRemove))
    }
    return(
        <CartContext.Provider value={{cartItems,addItems,removeItems}}>
            {children}
        </CartContext.Provider>
    )
})
      export   const useCart = ()=>{
        return(
            useContext(CartContext)
        )
      }