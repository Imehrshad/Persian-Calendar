import React, { createContext, useEffect, useState } from 'react'
export const YearDisplayState = createContext()
export const CurrentYear = createContext()
export const YearIndexValue = createContext()
export const SelectedYear = createContext()
export const FaMonth = createContext()
export const Currmonth = createContext()
export const SelectedDayData = createContext()
export const currentDay = createContext()
export const showResult = createContext()
export const MyContext = (props) => {

    const [year, setYear] = useState(1402)
    const [yearDisplay, setYearDisplay] = useState(false)
    const [yearIndex, setyearIndex] = useState(year)
    const [yearButtonClicked, setYearButtonClicked] = useState()
    const PersianMonth = ["فروردین", "اردیبهشت", "خرداد", "تیر", "مرداد", "شهریور", "مهر", "آبان", "آذر", "دی", "بهمن", "اسفند"]
    const [CurrentMonth, setCurrentMonth] = useState(PersianMonth[0])
    const [dayButtonClicked, setDayButtonClicked] = useState()
    const [day, setDay] = useState(1)
    const [result, setResult] = useState({
        day: day,
        year: year,
        month: CurrentMonth
    })
    useEffect(() => {
        setResult(prev => ({ day: day, year: year, month: CurrentMonth }))
    }, [day, CurrentMonth, year])

    return (
        <YearDisplayState.Provider value={[yearDisplay, setYearDisplay]}>
            <Currmonth.Provider value={[CurrentMonth, setCurrentMonth]}>
                <FaMonth.Provider value={PersianMonth}>
                    <CurrentYear.Provider value={[year, setYear]}>
                        <YearIndexValue.Provider value={[yearIndex, setyearIndex]}>
                            <currentDay.Provider value={[day, setDay]}>
                                <SelectedDayData.Provider value={[dayButtonClicked, setDayButtonClicked]}>
                                    <SelectedYear.Provider value={[yearButtonClicked, setYearButtonClicked]}>
                                        <showResult.Provider value={[result, setResult]}>
                                            {props.children}
                                        </showResult.Provider>
                                    </SelectedYear.Provider>
                                </SelectedDayData.Provider>
                            </currentDay.Provider>
                        </YearIndexValue.Provider>
                    </CurrentYear.Provider>
                </FaMonth.Provider>
            </Currmonth.Provider>
        </YearDisplayState.Provider>
    )
}
