import React from "react"

import Header from "./header"
import Footer from "./footer"

import "../styles/main.scss"
import "./layout.scss"

const Layout = props => {
  return (
    <div className="layout">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default Layout
