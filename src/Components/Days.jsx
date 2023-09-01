import React, { useContext } from 'react';
import Styles from "./Calender.module.scss";
import { Currmonth, FaMonth, SelectedDayData, currentDay } from './Context/MyContext';

export const Days = () => {
  const persianMonths = useContext(FaMonth);
  const [CurrentMonth, setCurrentMonth] = useContext(Currmonth);
  const [day, setDay] = useContext(currentDay)
  const [dayButtonClicked, setDayButtonClicked] = useContext(SelectedDayData)
  const renderButtons = () => {
    const buttons = [];
    for (let x = 0; x < 12; x++) {
      if (x <= 6 && CurrentMonth === persianMonths[x]) {
        for (let i = 1; i <= 31; i++) {
          const day = i
          buttons.push(
            <button key={i} value={i} onClick={handleButtonClick} className={dayButtonClicked === day ? Styles.active : ""}>
              {i}
            </button>
          );
        }
      }
      if (x > 6 && x < 11 && CurrentMonth === persianMonths[x]) {
        for (let i = 1; i <= 30; i++) {
          const day = i
          buttons.push(
            <button key={i} value={i} onClick={handleButtonClick} className={dayButtonClicked === day ? Styles.active : ""}>
              {i}
            </button>
          );
        }
      }
      if (x === 11 && CurrentMonth === persianMonths[x]) {
        for (let i = 1; i <= 29; i++) {
          buttons.push(
            <button key={i} value={i} onClick={handleButtonClick} className={dayButtonClicked === day ? Styles.active : ""}>
              {i}
            </button>
          );
        }
      }
    }
    return buttons;
  };

  const handleButtonClick = (e) => {
    const selectedDay = e.target.value;
    setDay(selectedDay)
    setDayButtonClicked(Number(e.target.value))

  };

  return (
    <div className={Styles.DaysContainer}>
      {renderButtons()}
    </div>
  );
};
