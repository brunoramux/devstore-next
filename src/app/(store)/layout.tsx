import React, { ReactNode } from 'react'
import Header from '../../components/header'

export default function StoreLayout({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto grid min-h-screen w-full max-w-[1600px] grid-rows-[min-content_max-content] gap-5 px-8 py-8">
      <Header />
      {children}
    </div>
  )
}
