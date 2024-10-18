import React from 'react'
import Header from './_components/Header'

interface RootLayoutProps {
    children: React.ReactNode
}

const RoutesLayout = ({children}:RootLayoutProps) => {
  return (
    <main className='antialiased min-h-screen flex justify-center mx-auto bg-slate-200 dark:bg-black '>
      <div className='container flex-col'>
      <Header />
        {children}
      </div>
    </main>
  )
}

export default RoutesLayout
