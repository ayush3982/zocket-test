import React, { useState } from 'react';
import styles from './../styles/three.module.css';
import calender from './../assets/calender.svg'
import india from './../assets/india.svg'
import smallrrow from './../assets/smallArrow.svg'
import location from './../assets/location.svg'
import blueberry from './../assets/blueberry.svg'
import { Slider } from "antd";
const formatter = (value) => `Rs. ${value}000`;

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
                        <div className = {styles.inputContainer}>
                            <div className = {styles.inputGroup}>
                                <div className = {styles.budgetLine}>Start Date</div>
                                <div className = {styles.inputLine}>
                                    <input className = {styles.textBox} />
                                    <img className = {styles.click}  src = {calender} />
                                </div>
                            </div>
                            <div className = {styles.inputGroup}>
                                <div className = {styles.budgetLine}>End Date</div>
                                <div className = {styles.inputLine}>
                                    <input className = {styles.textBox} />
                                    <img className = {styles.click}  src = {calender} />
                                </div>
                            </div>
                        </div>
                        <div className = {styles.newRow}>
                            <div className = {styles.budgetLineTwo}>
                                Enter campaign budget
                            </div>
                            <div className = {styles.priceBox}>
                                <img src = {india}/>
                                <div className = {styles.price}>INR</div>
                                <img src = {smallrrow}/>
                            </div>
                        </div>
                        <Slider className = {styles.slider}
                            tooltip={(
                                (value) => `${value} km`
                            )}
                            defaultValue={30}
                        />
                        <div className = {styles.sliderLabels}>
                            <div className = {styles.sliderLabelOne}>
                                100
                            </div>
                            <div className = {styles.sliderLabelTwo}>
                                1,00,000
                            </div>
                        </div>
                    </div>
                </div>
                <div className = {styles.rowThree}>
                    <div className = {styles.blueContainer}>2</div>
                    <div className = {styles.textContainer}>Location info</div>
                </div>
                <div className = {styles.rowTwo}>
                    <div className = {styles.longBarHidden}></div>
                    <div className = {styles.budgetContainer}>
                        <div className = {styles.budgetLine}>Location type</div>
                        <div className = {styles.weirdButton}>
                            <div className = {styles.weirdContainer}>
                                Location
                            </div>
                            <div className = {styles.weirdText}>Radius</div>
                        </div>
                        <div className = {styles.inputContainer}>
                            <div className = {styles.inputGroup}>
                                <div className = {styles.budgetLine}>Select Location</div>
                                <div className = {styles.inputLine}>
                                    <input className = {styles.textBoxBig}  placeholder = "Select a place name, address or coordinates"/>
                                    <img className = {styles.click}  src = {location} />
                                </div>
                            </div>
                        </div>
                        <div className = {styles.newRow}>
                            <div className = {styles.budgetLineTwo}>
                                Select target radius
                            </div>
                        </div>
                        <Slider className = {styles.slider}
                            tooltip={{
                                formatter
                            }}
                            defaultValue={30}
                        />
                        <div className = {styles.sliderLabels}>
                            <div className = {styles.sliderLabelOne}>
                                1
                            </div>
                            <div className = {styles.sliderLabelTwo}>
                                30
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StepThree;