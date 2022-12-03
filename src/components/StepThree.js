import React, { useState } from 'react';
import styles from './../styles/two.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'
import clickOutline from './../assets/clickOutline.svg'
import blueberry from './../assets/blueberry.svg'

const StepThree = () => {

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
                    <img className = {styles.click}  src = {blueberry} />
                    <div className = {styles.cardBody}>
                        <div className = {styles.cardHeading}>
                            Blueberry cake with raw toppings
                        </div>
                        <div className = {styles.cardDate}>
                            Rs: 2,290
                        </div>
                    </div>
                    {button}
                </label>
            </>
        )
    }

    return (
        <div className = {styles.wrapper}>
            <div className = {styles.header}>
                <div className = {styles.textOne}>
                    Choose The Product
                </div>
                <div className = {styles.textTwo}>
                    (Step 2 of 4)
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

export default StepThree;