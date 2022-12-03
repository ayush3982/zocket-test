import React, {useState} from 'react';
import styles from './../styles/side.module.css';
import {NavLink} from 'react-router-dom'

const SideButton = (props) => {

    const {iconBox, iconBoxActive} = styles

    const [isMuted, setIsMuted] = useState(true)

    const handleMove = () => {
        setIsMuted(false)
    }

    const handleLeave = () => {
        setIsMuted(true)
    }

    let button;

    if(isMuted) {
        button = <img className = {styles.sideButton} src = {props.iconMuted} />
    } else {
        button = <img className = {styles.sideButton} src = {props.iconActive} />
    }

    return (
        <NavLink to = {props.where} onMouseOver = {handleMove} onMouseLeave = {handleLeave} className={({ isActive }) => (isActive ? styles.iconBoxActive : styles.iconBox)}>
                {button}
                <div className = {styles.text}>{props.iconName}</div>
        </NavLink>
    )
}

export default SideButton;