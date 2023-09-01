import { useState } from 'react'
import './App.css'
import { Calender } from './Components/Calender'
import { MyContext } from './Components/Context/MyContext'
import { Resultindicator } from './Resultindicator'
import Styles from "./Components/Calender.module.scss"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className={Styles.animationContainer}>
      <MyContext >
        <Calender />
        <Resultindicator />
      </MyContext>
    </div>
  )
}

export default App
