import React from 'react';
import Stepper from './Stepper';
import styles from './../styles/new.module.css';

const NewCampaign = () => {
    return (
        <>
            <div className = {styles.createContainer}>
                <div className = {styles.createHeader}>
                    <div className = {styles.createText}>
                        <div className = {styles.textOne}>Your Ad Campaign</div>
                        <div className = {styles.textTwo}>Launch your ad in just 4 easy steps</div>
                    </div>
                </div>
                <div className = {styles.stepperContainer}>
                    <Stepper />
                </div>
            </div>
        </>
    )
}

export default NewCampaign