import React, { useContext, useState } from 'react'
import Styles from "./Calender.module.scss"
import { Currmonth, FaMonth } from './Context/MyContext'

export const Month = () => {
  
    const persianMonths = useContext(FaMonth)
    const [CurrentMonth, setCurrentMonth] = useContext(Currmonth)
    const nextMonthHander = () => {
        setCurrentMonth((prev) => {
            let currentIndex = persianMonths.indexOf(prev)
            const nextIndex = (currentIndex + 1) % persianMonths.length
            return persianMonths[nextIndex]
        })
    }
    const previousMonthHander = () => {
        setCurrentMonth((prev) => {
            let currentIndex = persianMonths.indexOf(prev)
            if (currentIndex === 0) {
                currentIndex = persianMonths.length
            }
            const nextIndex = (currentIndex - 1) % persianMonths.length
            return persianMonths[nextIndex]
        })
    }

    return (
        <div className={Styles.MonthContainer}>
            <button onClick={previousMonthHander}>&larr;</button>
            <p>{CurrentMonth}</p>
            <button onClick={nextMonthHander}>&rarr;</button>
        </div>
    )
}
