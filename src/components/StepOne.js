import React, { useState } from 'react';
import styles from './../styles/one.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'

const StepOne = () => {

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
            button = <img  src = {phoneOutline} />
        } else {
            button = <img  src = {phoneFilled} />
        } 

        return (
            <>
                <label className = {styles.card} onMouseOver = {handleLeave} onMouseLeave = {handleMove}>
                {fill && (<img className = {styles.click}  src = {click} />)}
                    {button}
                    <div className = {styles.cardBody}>
                        <div className = {styles.cardHeading}>
                            Get Leads as calls
                        </div>
                        <div className = {styles.cardDate}>
                            Reach broad audience and get leads through calls
                        </div>
                    </div>
                </label>
            </>
        )
    }

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.header}>
                <div className = {styles.textOne}>
                    What you want to do?
                </div>
                <div className = {styles.textTwo}>
                    (Step 1 of 4)
                </div>
            </div>    
            <div className = {styles.headerBar}> </div>
            <div className = {styles.choices}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </div>
    )
}

export default StepOne;