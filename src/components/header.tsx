import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { CartWidget } from './cart-widget'
import { SearchForm } from './search-form'

export default function Header() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-5">
        <Link href="/" className="text-2xl font-extrabold text-white">
          devstore
        </Link>
        <SearchForm />
      </div>
      <div className="flex items-center gap-4">
        <CartWidget />
        <div className="w-px h-4 bg-zinc-700" />

        <Link href="/" className="flex items-center gap-2 hover:underline">
          <span className="text-sm">Account</span>
          <Image
            src="https://github.com/brunoramux.png"
            className="h-7 w-7 rounded-full"
            width={28}
            height={28}
            alt=""
          />
        </Link>
      </div>
    </div>
  )
}
