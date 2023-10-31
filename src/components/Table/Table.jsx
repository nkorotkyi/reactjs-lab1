"use client"

import React, { useState, createContext, useEffect } from "react"

import styles from "./Table.module.scss"
import Subject from "./Subject"

export const AvgContext = createContext()

const Table = () => {
  const [average, setAverage] = useState([])
  const [result, setResult] = useState(0)

  useEffect(() => {
    setResult(average.reduce((a, b) => a + b) / average.length)
  }, [average, result])

  return (
    <AvgContext.Provider value={{ average, setAverage }}>
      <div className={styles.container}>
        <table className={styles.mytable}>
          <tbody>
            <tr>
              <td>
                <h2>Дисципліна</h2>
              </td>
              <td>
                <h2>Бали</h2>
              </td>
            </tr>
            <Subject subject="Бази даних" mark={72} />
            <Subject subject="Комп'ютерна дискретна математика" mark={75} />
            <Subject subject="Іноземна мова" mark={80} />
            <Subject subject="Backend-розробка" mark={74} />
            <Subject subject="Комп'ютерна графіка" mark={90} />
            <Subject subject="Технології розробки додатків .NET Core" mark={85} />
            <Subject subject="Frontend-розробка" mark={75} />
            <tr>
              <td>Середній бал</td>
              <td>{result.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </AvgContext.Provider>
  )
}

export default Table
