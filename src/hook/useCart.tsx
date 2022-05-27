import React from 'react'
import { useState } from 'react'
import { Product, Cart, products } from './product'



export const useCart = () => {
    const [cart, setCart] = useState<Cart>([])
    const [total, setTotal] = useState<number>(0.00)
    const [quantity, setQuantity] = useState<number | null>(null)
    const [open, setOpen] = useState<boolean>(false)

    const handleAddToCart = (id: string) => {
        const selectedProduct= products.find(product => product.id === id)!;

        if (cart.every(item => item.id !== id)) {
            setCart(prevItems => [...prevItems, selectedProduct])
        } else {
            handleIncrement(id);
        }
    }

    const cartTotal = () => {
        setTotal(Number(cart.reduce((total, {cost, quantity}) => total + (cost * quantity), 0.00).toFixed(2)))
    }

    const cartQuantity = () => {
        setQuantity(cart.reduce((total, { quantity }) => total + quantity, 0))
    }

    const handleIncrement = (id: string) => {
        setCart(cart.map(item => item.id !== id ? item : {...item, quantity: item.quantity + 1, currentCost: Number((item.currentCost + item.cost).toFixed(2))}))
    }

    const handleDecrement = (id: string) => {
        setCart(cart.map(item => item.id !== id ? item : {...item, quantity: item.quantity - 1, currentCost: Number((item.currentCost - item.cost).toFixed(2))})
                    .filter(item => item.quantity !== 0))     
    }

    const openCart = () => {
        setOpen(true)
    } 

    const closeCart = () => {
        setOpen(false)
    } 

    return [ 
        cart,
        total,
        open,
        handleAddToCart,
        cartTotal,
        handleIncrement,
        handleDecrement,
        openCart,
        closeCart,
        quantity,
        cartQuantity
    ] as const;
}

export default useCart;