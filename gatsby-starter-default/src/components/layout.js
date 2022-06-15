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
          margin: `0 auto`,
          padding: `var(--space-4) var(--size-gutter)`,
          display: `flex`,
          flexDirection: 'row',
        }}   
      >

        <div
          style={{
            flexGrow: 2,
            backgroundColor: 'lightblue',
            padding: '1em'
          }}        
        >
          <ul>
            <li>Advocacy</li>
            <li>Project Management</li>
            <li>Entitlements and Rights</li>
            <li>Testing</li>
          </ul>
        </div>

        <div
          style={{
            flexGrow: 3,
            padding: '1em'
          }}
        >
          <main
            style={{
              padding: '1em'
            }}
          >
            {children}
          </main>

          <footer
            style={{
              marginTop: `var(--space-5)`,
              fontSize: `var(--font-sm)`,
            }}
          >
            © {new Date().getFullYear()} &middot; Rho Lall

          </footer>
          
        </div>

        <div
          style={{
            flexGrow: 2,
            backgroundColor: 'lightblue',
            padding: '1em'
          }}        
        >

        </div>
        


      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
