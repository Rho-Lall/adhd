import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header
    style={{
      display: `flex`,
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      //margin: `0 auto`,
      // padding: `var(--space-4) var(--size-gutter)`,
      boxShadow: '1px 1px 15px 0px #ccc'
    }}
  >
    <div
      style={{  
        flexGrow: 1,
      }}
    >
      <Link
        to="/"
        style={{
          fontSize: `1.5em`,  
          textDecoration: `none`,
          float: 'right',
          paddingRight: '.5em'

        }}
      >
        Rho Lall DOCS
      </Link>

    </div>

    <div
      style={{
        flexGrow: 4,
        borderRight: '1px solid grey',
        borderLeft: '1px solid grey',
        padding: '1em'
      }}      
    >
      ADHD Advocacy Guidebook for Parents
    </div>
    
    <div
      style={{ 
        flexGrow: 1,
        paddingLeft: '.5em'
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
