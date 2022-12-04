import React, { useState } from 'react';
import styles from './../styles/four.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'
import clickOutline from './../assets/clickOutline.svg'
import post from './../assets/post.svg'
import mukund from './../assets/mukund.svg'
import lowBar from './../assets/lowBar.svg'

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
                    {fill && (<img className = {styles.tick}  src = {click} />)}
                    <div className = {styles.cardHeader}>
                        <img className = {styles.avatar}  src = {mukund} />
                        <div className = {styles.cardBody}>
                            <div className = {styles.cardHeading}>
                                Mukund Cake Shop
                            </div>
                            <div className = {styles.cardDate}>
                                Sponsored
                            </div>
                        </div>
                    </div>
                    <div className = {styles.cardData}>
                        We are the best bakery around you. Please like my page to get updates on exciting offers and discounts
                    </div>
                    <img className = {styles.postImage} src = {post} />
                    <img className = {styles.postImageLow} src = {lowBar} />
                    {fill && (
                        <div className = {styles.buttonGroup}>
                            <div className = {styles.button}>
                                Change image
                            </div>
                            <div className = {styles.button}>
                                Edit text
                            </div>
                        </div>
                    )}
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