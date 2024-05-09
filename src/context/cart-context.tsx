'use client'

import { ReactNode, createContext, useContext, useState } from 'react'

export interface CartItem {
  slug: string
  quantity: number
}

interface CartContextType {
  items: CartItem[]
  addToCart: (slug: string) => void
}

const CartContext = createContext({} as CartContextType)

export function CartProvider({ children }: { children: ReactNode }) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  function addToCart(slug: string) {
    setCartItems((state) => {
      const productInCart = state.some((item) => item.slug === slug)
      console.log(productInCart)
      if (productInCart) {
        return state.map((item) => {
          if (item.slug === slug) {
            return { ...item, quantity: item.quantity + 1 }
          }
          return item
        })
      } else {
        return [...state, { slug, quantity: 1 }]
      }
    })
  }

  return (
    <CartContext.Provider value={{ items: cartItems, addToCart }}>
      {children}
    </CartContext.Provider>
  )
}

export const useCart = () => useContext(CartContext)
