/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import Navigation from "./navigation"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center'
        }}   
      >
        
        <nav
          style={{
            flexBasis: 1,
            flexGrow: 1,
            backgroundColor: '#F5F7F9'
          }}
        >
          < Navigation />    
        </nav>

        <main
          style={{
            flexBasis: 4,
            flexGrow: 4,
            padding: '2em'
          }}
        >
          {children}
        </main>

        <aside
          style={{
            flexBasis: 1,
            flexGrow: 1,
            backgroundColor: '#F5F7F9'
          }}        
        >

        </aside>
        
      </div>

      <footer
        style={{
          marginTop: `var(--space-5)`,
          fontSize: `var(--font-sm)`,
          display: 'flex',
          justifyContent: 'end',
          paddingRight: '2em'
        }}
      >
        © {new Date().getFullYear()} &middot; Rho Lall
      </footer>

    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
