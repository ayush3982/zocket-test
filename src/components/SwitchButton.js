import React from 'react';
import styles from '../styles/switch.module.css'

const SwitchButton = () => {
    return (
        <>
            <input className = {styles.customSwitch} type = "checkbox" />
        </>
    )
}

export default SwitchButton