import React, { useState } from 'react';
import bulb from './../assets/bulb.svg'
import productGrey from './../assets/productGrey.svg'
import productWhite from './../assets/productWhite.svg'
import campaignGrey from './../assets/campaignGrey.svg'
import campaignWhite from './../assets/campaignWhite.svg'
import doneGrey from './../assets/doneGrey.svg'
import doneWhite from './../assets/doneWhite.svg'
import styles from './../styles/stepper.module.css';
import StepOne from './StepOne';
import StepTwo from './StepTwo';
import StepThree from './StepThree'
import StepFour from './StepFour'

const Stepper = () => {

    const [step, setStep] = useState(1);

    const handleTwo = () => {
        setStep(2);
    }

    const handleThree = () => {
        setStep(3);
    }

    const handleFour = () => {
        setStep(4);
    }

    const StepperOne = () => {
        return (
            <>
                <div className = {styles.stepper}>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.helper}></div>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {bulb} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilled}></div>
                            </div>
                        </div>
                        <div className = {styles.text}>
                            What you want to do
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {productGrey} />
                            </div>
                            <div className = {styles.line}>
                                
                            </div>
                        </div>
                        <div className = {styles.textMutedOne}>
                        Choose product
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {campaignGrey} />
                            </div>
                            <div className = {styles.line}>
                                
                            </div>
                        </div>
                        <div className = {styles.textMutedTwo}>
                        Campaign settings
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {doneGrey} />
                            </div>
                        </div>
                        <div className = {styles.textMutedThree}>
                            Ready to go
                        </div>
                    </div>
                </div>
                <div className = {styles.stepperBox}>
                    <StepOne />
                </div>
                <div className = {styles.stepperButtonContainer}>
                    <div className = {styles.stepperButton} onClick = {handleTwo}>
                        Continue
                    </div>
                </div>
            </>
        )
    }

    const StepperTwo = () => {
        return (
            <>
                <div className = {styles.stepper}>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.helper}></div>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {bulb} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.text}>
                            What you want to do
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {productWhite} />
                            </div>
                            <div className = {styles.line}>
                            <div className = {styles.lineFilled}></div>
                            </div>
                        </div>
                        <div className = {styles.textOne}>
                        Choose product
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {campaignGrey} />
                            </div>
                            <div className = {styles.line}>
                                
                            </div>
                        </div>
                        <div className = {styles.textMutedTwo}>
                        Campaign settings
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {doneGrey} />
                            </div>
                        </div>
                        <div className = {styles.textMutedThree}>
                            Ready to go
                        </div>
                    </div>
                </div>
                <div className = {styles.stepperBox}>
                    <StepTwo />
                </div>
                <div className = {styles.stepperButtonContainer}>
                    <div className = {styles.stepperButton} onClick = {handleThree}>
                        Continue
                    </div>
                </div>
            </>
        )
    }

    const StepperThree = () => {
        return (
            <>
                <div className = {styles.stepper}>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.helper}></div>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {bulb} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.text}>
                            What you want to do
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {productWhite} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.textOne}>
                        Choose product
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {campaignWhite} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledSemi}></div>
                            </div>
                        </div>
                        <div className = {styles.textTwo}>
                        Campaign settings
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.muted}>
                                <img className = {styles.icon} src = {doneGrey} />
                            </div>
                        </div>
                        <div className = {styles.textMutedThree}>
                            Ready to go
                        </div>
                    </div>
                </div>
                <div className = {styles.stepperBoxThree}>
                    <StepThree />
                </div>
                <div className = {styles.stepperButtonContainer}>
                    <div className = {styles.stepperButton} onClick = {handleFour}>
                        Continue
                    </div>
                </div>
            </>
        )
    }

    const StepperFour = () => {
        return (
            <>
                <div className = {styles.stepper}>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.helper}></div>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {bulb} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.text}>
                            What you want to do
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {productWhite} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.textOne}>
                        Choose product
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {campaignWhite} />
                            </div>
                            <div className = {styles.line}>
                                <div className = {styles.lineFilledFull}></div>
                            </div>
                        </div>
                        <div className = {styles.textTwo}>
                        Campaign settings
                        </div>
                    </div>
                    <div className = {styles.block}>
                        <div class = {styles.art}>
                            <div className = {styles.active}>
                                <img className = {styles.icon} src = {doneWhite} />
                            </div>
                        </div>
                        <div className = {styles.textThree}>
                            Ready to go
                        </div>
                    </div>
                </div>
                <div className = {styles.stepperBoxFour}>
                    <StepFour />
                </div>
                <div className = {styles.stepperButtonContainer}>
                    <div className = {styles.stepperButton} onClick = {handleFour}>
                        Start campaign
                    </div>
                </div>
            </>
        )
    }
   
    return (
        <>
            {step === 1 && (
                <StepperOne />
            )}
            
            {step === 2 && (
                <StepperTwo />
            )}
            
            {step === 3 && (
                <StepperThree />
            )}
            {step === 4 && (
                <StepperFour />
            )}
        </>
    )
}

export default Stepper