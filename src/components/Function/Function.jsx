"use client"

import React, { useEffect, useState } from "react"
import styles from "./Function.module.scss"

export const FunctionComp = ({ num1, num2 }) => {
  const [result, setResult] = useState(1)

  const calculatePower = () => {
    const powerResult = Math.pow(num1, num2)
    setResult(powerResult)
  }
  useEffect(() => {
    calculatePower()
  }, [result])

  return (
    <div className={styles.container}>
      <h1>Приведення першого числа до степені другого числа</h1>
      <div>Перше число: {num1}</div>
      <div>Друге число: {num2}</div>
      <div>
        {num1} ^ {num2} = {result}
      </div>
    </div>
  )
}

export default FunctionComp
