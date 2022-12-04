import React from "react";
import styles from '../styles/row.module.css'
import SwitchButton from './SwitchButton'
import campaignOne from './../assets/campaignOne.svg'
import campaignTwo from './../assets/campaignTwo.svg'
import campaignThree from './../assets/campaignThree.svg'
import campaignFour from './../assets/campaignFour.svg'
import campaignFive from './../assets/campaignFive.svg'
import facebook from './../assets/facebook.svg'
import google from './../assets/google.svg'
import youtube from './../assets/youtube.svg'
import edit from './../assets/edit.svg'
import deleteIcon from './../assets/deleteIcon.svg'

const TableRow = (props) => {
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
                    {props.image == "campaignOne" && (
                        <img src = {campaignOne} />
                    )}
                    {props.image == "campaignTwo" && (
                        <img src = {campaignTwo} />
                    )}
                    {props.image == "campaignThree" && (
                        <img src = {campaignThree} />
                    )}
                    {props.image == "campaignFour" && (
                        <img src = {campaignFour} />
                    )}
                    {props.image == "campaignFive" && (
                        <img src = {campaignFive} />
                    )}
                    </div>
                    <div className = {styles.campaignBody}>
                        <div className = {styles.campaignHeading}>
                            {props.title}
                        </div>
                        <div className = {styles.campaignDate}>
                            {props.created}
                        </div>
                    </div>
                </div>
                <div className = {styles.dateRange}>
                    {props.range}
                </div>
                <div className = {styles.clicks}>
                    {props.clicks}
                </div>
                <div className = {styles.budget}>
                    {props.budget}
                </div>
                <div className = {styles.place}>
                    {props.location}
                </div>
                {props.platform == "Facebook" && (
                    <img src = {facebook} />
                )}
                {props.platform == "Google" && (
                    <img src = {google} />
                )}
                {props.platform == "Youtube" && (
                    <img src = {youtube} />
                )}
                {props.status == "Live now" && (
                    <div className = {styles.statusLive}>
                    {props.status}
                    </div>
                )}
                {props.status == "Paused" && (
                    <div className = {styles.statusPaused}>
                    {props.status}
                    </div>
                )}
                {props.status == "Exhausted" && (
                    <div className = {styles.statusExhausted}>
                    {props.status}
                    </div>
                )}
                <img className = {styles.iconEdit} src = {edit} />
                <img className = {styles.iconDelete} src = {deleteIcon} />
            </div>
            <div className = {styles.boxTwo}></div>
        </div>
    )
}

export default TableRow;