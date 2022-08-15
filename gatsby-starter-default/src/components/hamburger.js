import React, { useState } from "react"
// import HamburgerMenu from "./hamburgerMenu"


const Hamburger = () => {

    const [nav, showNav] = useState(false)

    const handleClick = () => showNav(!nav)

    return (
        <div
            role='button' 
            nav={nav} 
            onClick={handleClick}
            style={{
                display: 'flex',
                flexDirection:'column',
                justifyContent: 'space-around',
                background: 'transparent',
                boarder: 'none',
                cursor: 'pointer',
                marginLeft: '.5rem',
                zIndex: '5',
            }}
        >
            <div style={{background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem'}}/>
            <div style={{background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem', marginTop: '.1rem', opacity: `${({nav}) => nav ? '0' : '1'}`}}/>
            <div style={{background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem', marginTop: '.1rem'}}/>
        </div>


    )

}

export default Hamburger
