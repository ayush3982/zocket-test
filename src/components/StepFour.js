import React, { useState } from 'react';
import styles from './../styles/four.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'
import clickOutline from './../assets/clickOutline.svg'
import blueberry from './../assets/blueberry.svg'

const StepFour = () => {

    const Card = () => {

        const [fill, setFill] = useState(false);

        const handleMove = () => {
            setFill(false)
        }
    
        const handleLeave = () => {
            setFill(true)
        } 

        let button;

        if(!fill) {
            button = <img className = {styles.click}  src = {clickOutline} />
        } else {
            button = <img className = {styles.click}  src = {click} />
        } 

        return (
            <>
                <label className = {styles.card} onMouseOver = {handleLeave} onMouseLeave = {handleMove}>
                    <div className = {styles.cardHeader}>
                        
                    </div>
                </label>
            </>
        )
    }

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.header}>
                <div className = {styles.textOne}>
                    Ready to go
                </div>
                <div className = {styles.textTwo}>
                    (Step 4 of 4)
                </div>
            </div>    
            <div className = {styles.headerBar}> </div>
            <div className = {styles.choices}>
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default StepFour;