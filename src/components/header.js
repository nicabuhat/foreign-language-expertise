import { Link, graphql, useStaticQuery } from "gatsby"
import React from "react"

import headerStyle from "./header.module.scss"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <header className={headerStyle.header}>
      <div className={headerStyle.brand} className="grid">
        <Link className={headerStyle.logo} to="/">
          Logo
        </Link>
        <h1 className={headerStyle.title}>
          <Link to="/">{data.site.siteMetadata.title}</Link>
        </h1>
        <h2 className={headerStyle.author}>Arguelles</h2>
      </div>
      <nav>
        <ul className={headerStyle.nav}>
          <li>
            <Link to="/videos/">Videos</Link>
          </li>
          <li>
            <Link to="/blog/">Polyliteracy</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/resources/">Resources</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
// {headerStyle.link}
