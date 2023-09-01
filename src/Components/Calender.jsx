import React, { useContext } from 'react'
import { Year } from './Year'
import { Month } from './Month'
import { Days } from './Days'
import Styles from "./Calender.module.scss"
import { YearDisplayState } from './Context/MyContext'

import { YearController } from './YearController'
import Years from './Years'

export const Calender = () => {
    const [yearDisplay, setYearDisplay] = useContext(YearDisplayState)
    return (
        <div className={Styles.Continer}>
            <div className={Styles.CalenderContainer}>
                <Year />

                {yearDisplay && <><YearController /> <Years /></>}
                {!yearDisplay && <><Month />  <Days /></>}
            </div>
        </div>
    )
}
