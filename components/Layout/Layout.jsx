import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import What_we_do from './components/What_we_do'
import Services from './components/Services'
import Team from './components/Team'

export default function Layout() {
  return (
    <>
    <Header/>
     <What_we_do/>
     <Services />
     <Team/>
<Footer />
    </>
  )
}
