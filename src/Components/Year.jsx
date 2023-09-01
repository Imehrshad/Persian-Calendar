import React, { useContext, useState } from 'react'
import Styles from "./Calender.module.scss"
import { CurrentYear, YearDisplayState } from './Context/MyContext'
export const Year = () => {
    const [year, setYear] = useContext(CurrentYear)
    const [yearDisplay, setYearDisplay] = useContext(YearDisplayState)
    const YearDisplayHandler = () => {
        setYearDisplay(!yearDisplay)
    }
    return (
        <button onClick={YearDisplayHandler} className={Styles.YearContainer}>{year}</button>
    )
}
