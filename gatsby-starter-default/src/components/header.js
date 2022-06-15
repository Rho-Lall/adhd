import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      margin: `0 auto`,
      padding: `var(--space-4) var(--size-gutter)`,
      display: `flex`,
      flexDirection: 'row',
      boxShadow: '1px 1px 15px 0px #ccc'
    }}
  >
    <div
      style={{
        height: '50px',
        borderRight: '1px solid grey',  
        flexGrow: 1,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `1em`,  
          textDecoration: `none`,
          float: 'right',
          padding: '1em'
        }}
      >
        Rho Lall DOCS
      </Link>

    </div>

    <div
      style={{
        flexGrow: 4,
        padding: '1em'
      }}      
    >
      ADHD Advocacy Guidebook for Parents
    </div>
    
    <div
      style={{
        height: '50px',
        borderLeft: '1px solid grey',     
        flexGrow: 1,
        padding: '1em'
      }} 
    >
      🔍  Search . . .
    </div>
    
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
