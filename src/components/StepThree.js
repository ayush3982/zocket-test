import React, { useState } from 'react';
import styles from './../styles/three.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'
import clickOutline from './../assets/clickOutline.svg'
import blueberry from './../assets/blueberry.svg'

const StepThree = () => {



    return (
        <div className = {styles.wrapper}>
            <div className = {styles.header}>
                <div className = {styles.textOne}>
                    Campaign Settings
                </div>
                <div className = {styles.textTwo}>
                    (Step 3 of 4)
                </div>
            </div>    
            <div className = {styles.headerBar}> </div>
            <div className = {styles.miniWrapper}>
                <div className = {styles.rowOne}>
                    <div className = {styles.blueContainer}>1</div>
                    <div className = {styles.textContainer}>Budget and dates info</div>
                </div>
                <div className = {styles.rowTwo}>
                    <div className = {styles.longBar}></div>
                    <div className = {styles.budgetContainer}>
                        <div className = {styles.budgetLine}>Budget Timeline</div>
                        <div className = {styles.weirdButton}>
                            <div className = {styles.weirdContainer}>
                                Lifetime
                            </div>
                            <div className = {styles.weirdText}>Daily</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepThree;