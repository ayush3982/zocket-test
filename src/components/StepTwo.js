import React, { useState } from 'react';
import styles from './../styles/two.module.css';
import phoneOutline from './../assets/phoneOutline.svg'
import phoneFilled from './../assets/phoneFilled.svg'
import click from './../assets/click.svg'
import clickOutline from './../assets/clickOutline.svg'
import blueberry from './../assets/blueberry.svg'
import chocolate from './../assets/chocolate.svg'
import brownie from './../assets/brownie.svg'
import ferro from './../assets/ferro.svg'
import custard from './../assets/custard.svg'
import best from './../assets/best.svg'
import green from './../assets/green.svg'
import topping from './../assets/topping.svg'
import strawberry from './../assets/strawberry.svg'
import { twoData } from '../data/two';

const StepTwo = () => {

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
            button = <img className = {styles.click}  src = {clickOutline} />
        } else {
            button = <img className = {styles.click}  src = {click} />
        } 

        return (
            <>
                <label className = {styles.card} onMouseOver = {handleLeave} onMouseLeave = {handleMove}>
                    {props.id == 1 && (
                        <img className = {styles.click}  src = {blueberry} />
                    )}
                    {props.id == 2 && (
                        <img className = {styles.click}  src = {chocolate} />
                    )}
                    {props.id == 3 && (
                        <img className = {styles.click}  src = {brownie} />
                    )}
                    {props.id == 4 && (
                        <img className = {styles.click}  src = {ferro} />
                    )}
                    {props.id == 5 && (
                        <img className = {styles.click}  src = {custard} />
                    )}
                    
                    {props.id == 6 && (
                        <img className = {styles.click}  src = {best} />
                    )}
                    {props.id == 7 && (
                        <img className = {styles.click}  src = {green} />
                    )}
                    {props.id == 8 && (
                        <img className = {styles.click}  src = {topping} />
                    )}
                    {props.id == 9 && (
                        <img className = {styles.click}  src = {strawberry} />
                    )}
                    <div className = {styles.cardBody}>
                        <div className = {styles.cardHeading}>
                            Blueberry cake campaign
                        </div>
                        <div className = {styles.cardDate}>
                            Rs. {props.price}
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
                {twoData.map((data) =>
                    <Card title = {data.title} price = {data.price} id = {data.id}/>
                )}
               
            </div>
        </div>
    )
}

export default StepTwo;