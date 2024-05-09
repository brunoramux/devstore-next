'use client'

import { useCart } from '@/context/cart-context'
import { Product } from '@/data/types/product'

interface CartItemProps {
  products: Product[]
}

export default function CartItem({ products }: CartItemProps) {
  const { items } = useCart()
  const productsInCart = products.filter((product) =>
    items.some((item) => item.slug === product.slug),
  )

  return (
    <>
      {productsInCart.map((product, index) => {
        return (
          <div key={product.id}>
            {product.title} <br />
            Preço unitário:{' '}
            {product.price.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
            <br />
            Quantidade: {items[index].quantity}
            <br />
            Total:{' '}
            {(product.price * items[index].quantity).toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL',
            })}
          </div>
        )
      })}
    </>
  )
}
