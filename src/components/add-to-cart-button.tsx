'use client'

import { useCart } from '@/context/cart-context'

interface addToCartButtonProps {
  slug: string
}

export function AddToCartButton({ slug }: addToCartButtonProps) {
  const { addToCart } = useCart()

  function handleAddToCart() {
    addToCart(slug)
  }

  return (
    <button
      type="button"
      onClick={handleAddToCart}
      className="mt-8 flex h-12 items-center justify-center rounded-full bg-emerald-600 font-semibold text-white"
    >
      Adicionar ao carrinho
    </button>
  )
}
