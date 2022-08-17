import React, { useState } from "react"
import classNames from 'classnames'
import "./layout.css"
import Navigation from "./navigation"

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
                position: 'fixed',
                top: '1rem',
                left: '0rem'
            }}
        >
        <div className="showOnMobile" style={{zIndex: '7'}}>
                <div className={classNames({'dwn':nav})} style={{zIndex: '7', background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem'}}/>
                <div className={classNames({'toggleopacity':nav})} style={{background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem', marginTop: '.1rem'}}/>
                <div className={classNames({'upp':nav})}style={{zIndex: '7', background: 'lightslategrey', border: '0', borderRadius: '5px', height: '0.4rem', width: '1.5rem', marginTop: '.1rem'}}/>
            </div>
            
            <div className={classNames({'hide':!nav})} style={{
                position: 'fixed',
                zIndex: '5',
                top: '0',
                left: '0',
                height: '100vh',
                width: '100%',
                background: '#d7d7d7',
                opacity: '.95'

            }}>
                <div style={{
                    top: '1rem',
                    left: '1rem',
                    maxWidth: '70vw',
                }}>
                    < Navigation/>   
                </div>
            </div>
        </div>
    )

}

export default Hamburger
