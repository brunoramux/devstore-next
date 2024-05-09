'use client'

import { useCart } from '@/context/cart-context'
import { ShoppingBag } from 'lucide-react'
import Link from 'next/link'

export function CartWidget() {
  const { items } = useCart()

  return (
    <Link
      href={'/cart'}
      className="group relative col-span-6 row-span-6 rounded-lg bg-zinc-900 overflow-hidden flex justify-center items-end"
    >
      <div className="flex items-center gap-2">
        <ShoppingBag className="h-4 w-4" />
        <span className="text-sm">Cart ({items.length})</span>
      </div>
    </Link>
  )
}
