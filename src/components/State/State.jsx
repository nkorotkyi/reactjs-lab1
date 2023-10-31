"use client"

import React, { useState } from "react"
import styles from "./State.module.scss"
const State = ({ previousValue, title }) => {
  const [name, setName] = useState(previousValue)
  const [count, setCount] = useState(0)

  const handleNameChange = (e) => {
    console.log(e.target.value)
    setName(e.target.value)
  }

  const handleButtonClick = () => {
    setCount(count + 1)
  }
  return (
    <div className={styles.container}>
      <h1>{title}</h1>
      <p>Поточний лічильник: {count}</p>
      <button onClick={handleButtonClick}>Збільшити лічильник</button>
      <div>
        <input type="text" value={name} onChange={handleNameChange} />
      </div>
    </div>
  )
}

export default State
