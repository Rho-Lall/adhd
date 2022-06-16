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
import SectionSidebar from "./section-sidebar"

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
          // I need to figure out the CSS here. What does this code do? And how to I naild down the spacing on these divs? Flex? Max Width?
          // I guess I need to remove the template css and replace it with code that i have reviwed and understand. That means looking at layout.css.
          margin: `0 auto`,
          padding: `var(--space-4) var(--size-gutter)`,
          display: `flex`,
          flexDirection: 'row',
        }}   
      >
        
        <div
          style={{
            flexGrow: '2',
            backgroundColor: '#F5F7F9',
            
          }}        
        >
          <SectionSidebar />

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
            backgroundColor: '#F5F7F9',
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
