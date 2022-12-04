import React, { useState } from 'react';
import styles from './../styles/one.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import messageOutline from './../assets/messageOutline.svg'
import messageFilled from './../assets/messageFilled.svg'
import singleOutline from './../assets/singleOutline.svg'
import singleFilled from './../assets/singleFilled.svg'
import doubleOutline from './../assets/doubleOutline.svg'
import doubleFilled from './../assets/doubleFilled.svg'
import eyeOutline from './../assets/eyeOutline.svg'
import eyeFilled from './../assets/eyeFilled.svg'
import cursorOutline from './../assets/cursorOutline.svg'
import cursorFilled from './../assets/cursorFilled.svg'
import shopOutline from './../assets/shopOutline.svg'
import shopFilled from './../assets/shopFilled.svg'
import downloadOutline from './../assets/downloadOutline.svg'
import downloadFilled from './../assets/downloadFilled.svg'
import bookOutline from './../assets/bookOutline.svg'
import bookFilled from './../assets/bookFilled.svg'
import click from './../assets/click.svg'
import { threeData } from '../data/three'; 

const StepOne = () => {

    const Card = (props) => {

        const [fill, setFill] = useState(false);

        const handleMove = () => {
            setFill(false)
        }
    
        const handleLeave = () => {
            setFill(true)
        } 

        let button;

        if(!fill) {
            if(props.image == "phone") {
                button = <img  src = {phoneOutline} />
            }
            if(props.image == "message") {
                button = <img  src = {messageOutline} />
            }
            if(props.image == "single") {
                button = <img  src = {singleOutline} />
            }
            if(props.image == "double") {
                button = <img  src = {doubleOutline} />
            }
            if(props.image == "eye") {
                button = <img  src = {eyeOutline} />
            }
            if(props.image == "cursor") {
                button = <img  src = {cursorOutline} />
            }
            if(props.image == "shop") {
                button = <img  src = {shopOutline} />
            }
            if(props.image == "download") {
                button = <img  src = {downloadOutline} />
            }
            if(props.image == "book") {
                button = <img  src = {bookOutline} />
            }
            
        } else {
            if(props.image == "phone") {
                button = <img  src = {phoneFilled} />
            }
            if(props.image == "message") {
                button = <img  src = {messageFilled} />
            }
            if(props.image == "single") {
                button = <img  src = {singleFilled} />
            }
            if(props.image == "double") {
                button = <img  src = {doubleFilled} />
            }
            if(props.image == "eye") {
                button = <img  src = {eyeFilled} />
            }
            if(props.image == "cursor") {
                button = <img  src = {cursorFilled} />
            }
            if(props.image == "shop") {
                button = <img  src = {shopFilled} />
            }
            if(props.image == "download") {
                button = <img  src = {downloadFilled} />
            }
            if(props.image == "book") {
                button = <img  src = {bookFilled} />
            } 
        } 

        return (
            <>
                <label className = {styles.card} onMouseOver = {handleLeave} onMouseLeave = {handleMove}>
                {fill && (<img className = {styles.click}  src = {click} />)}
                    {button}
                    <div className = {styles.cardBody}>
                        <div className = {styles.cardHeading}>
                            {props.title}
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
                {threeData.map((data) =>
                    <Card title = {data.title} image = {data.image}/>
                )}
            </div>
        </div>
    )
}

export default StepOne;