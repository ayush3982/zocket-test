import React from "react";
import styles from '../styles/row.module.css'
import SwitchButton from './SwitchButton'
import campaignImage from './../assets/campaignImage.svg'
import facebook from './../assets/facebook.svg'
import edit from './../assets/edit.svg'
import deleteIcon from './../assets/deleteIcon.svg'

const TableRow = () => {
    return (
        <div className = {styles.big}>
            <div className = {styles.boxOne}></div>
            <div className = {styles.container}>
                <input className = {styles.check} type="checkbox"/>
                <div className = {styles.on}>
                    <SwitchButton />
                </div>
                <div className = {styles.campaignContainer}>
                    <div className = {styles.campaignImageContainer}>
                        <img src = {campaignImage} />
                    </div>
                    <div className = {styles.campaignBody}>
                        <div className = {styles.campaignHeading}>
                            Blueberry Cake Campaign
                        </div>
                        <div className = {styles.campaignDate}>
                            Created on 14 July
                        </div>
                    </div>
                </div>
                <div className = {styles.dateRange}>
                    25 Jul 20202 - 01 Aug 2020
                </div>
                <div className = {styles.clicks}>
                    300
                </div>
                <div className = {styles.budget}>
                    INR.3,400
                </div>
                <div className = {styles.place}>
                    Chennai
                </div>
                <img src = {facebook} />
                <div className = {styles.status}>
                    Live now
                </div>
                <img className = {styles.iconEdit} src = {edit} />
                <img className = {styles.iconDelete} src = {deleteIcon} />
            </div>
            <div className = {styles.boxTwo}></div>
        </div>
    )
}

export default TableRow;