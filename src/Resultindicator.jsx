import React, { useContext } from 'react'
import { showResult } from './Components/Context/MyContext'
import Styles from "./Components/Calender.module.scss"
export const Resultindicator = () => {
    const [result, setResult] = useContext(showResult)
    return (
        <div className={Styles.ResultContainer}>
            <h2 className={Styles.result}>
                {`${result.day}/${result.month}/${result.year}`}
            </h2>
        </div>
    )
}
