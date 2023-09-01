import React, { useContext, useState } from 'react'
import Styles from "./Calender.module.scss"
import { CurrentYear, YearIndexValue } from './Context/MyContext'
export const YearController = () => {
    const [year, setYear] = useContext(CurrentYear)
    const [yearIndex, setyearIndex] = useContext(YearIndexValue)
    const previousYearHander = () => {
        setyearIndex((prev) => prev - 30)
    }
    const nextYearHander = () => {
        setyearIndex((prev) => prev + 30)
    }
    return (
        <div className={Styles.MonthContainer}>
            <button onClick={previousYearHander}>&larr;</button>
            <p>{`${yearIndex}-${yearIndex - 30}`}</p>
            <button onClick={nextYearHander}>&rarr;</button>
        </div>
    )
}
