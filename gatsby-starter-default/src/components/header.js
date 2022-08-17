import * as React from "react"
import "./layout.css"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (

  <header
    style={{
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      height: 'auto',
      boxShadow: '1px 1px 15px 0px #ccc',
      position: 'relative',
      zIndex: '5'
      
    }}
  >
    <div      
      style={{  
      width: '260px'
      }}
      className="hideOnMobile"
    >
      <p
        style={{
          fontSize: `1.5em`,  
          textDecoration: `none`,
          float: 'right',
          paddingRight: '.5em',
          paddingTop: '.5em'
        }}
      >
          Rho Lall DOCS
      </p>
      
      
      
      
    </div>

    <div
      style={{
        flexBasis: 4,
        flexGrow: 4,
        borderRight: '1px dotted grey',
        borderLeft: '1px dotted grey',
        padding: '1em',
        textAlign: 'right'
      }}      
    >
      Resources for Faculty & Parents of Students with ADHD
    </div>
    
    <div
      style={{ 
        width: '270px',
        paddingLeft: '.5em'
      }} 
      className="hideOnMobile"
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
