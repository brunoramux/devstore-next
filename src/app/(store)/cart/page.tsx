import CartItem from '@/components/cart-item'
import { api } from '@/data/api'
import { Product } from '@/data/types/product'

export default async function Cart() {
  const response = await api('/products')
  const prod: Product[] = await response.json()

  return <CartItem products={prod} />
}
