import React, { memo, useContext, useState } from 'react'
import Styles from "./Calender.module.scss"
import { CurrentYear, SelectedYear, YearDisplayState, YearIndexValue } from './Context/MyContext'
import "./styles.scss"
 const Years = () => {
    const [yearDisplay, setYearDisplay] = useContext(YearDisplayState)
    const [year, setYear] = useContext(CurrentYear)
    const [yearIndex, setyearIndex] = useContext(YearIndexValue)
    const [buttonClicked , setButtonClicked]=useContext(SelectedYear)
    const renderButtons = () => {
        const buttons = [];

        for (let i = 0; i <= 30; i++) {
            const reducingYear = (yearIndex - 30) + i
            buttons.push(
                <button key={i} value={reducingYear} onClick={handleButtonClick} className={buttonClicked === reducingYear ? Styles.active : ""}>
                    {reducingYear}
                </button>
            );
        }
        return buttons
    }
    const handleButtonClick = (event) => {
        const selectedYear = event.target.value;
        setYear(selectedYear)
        setButtonClicked(Number(event.target.value))
        setYearDisplay(false)
    };
    return (
        <div className={Styles.YearsContainer}>
            {renderButtons()}
        </div>
    )
}
export default Years
