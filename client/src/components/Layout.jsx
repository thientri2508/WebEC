import Header from './Header'
import Footer from './Footer'
import SubHeader from './SubHeader'
import { Outlet } from "react-router-dom"
import Category from './Category'
import { useState } from "react"

const Layout = () => {

  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
        <SubHeader></SubHeader>
        <Header setIsOpen={setIsOpen} isOpen={isOpen}></Header>
        <Category setIsOpen={setIsOpen} isOpen={isOpen}></Category>
        <Outlet />
        <Footer></Footer>
    </>
  )
}

export default Layout