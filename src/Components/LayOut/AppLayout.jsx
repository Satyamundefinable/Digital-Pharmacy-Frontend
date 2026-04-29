import React from 'react'
import Header from '../UI/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../UI/Footer'

const AppLayout = () => {
  return (
    <>
    <Header/>
    <Outlet/>
    <hr />
    <Footer/>
    </>

)
}

export default AppLayout