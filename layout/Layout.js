import Footer from '@/components/Footer'
import Header from '@/components/Header'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <>
        <Header />
        {children}
        <Footer />
    </>
  )
}

export default Layout