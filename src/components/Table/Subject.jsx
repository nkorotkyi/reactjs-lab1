"use client"

import React, { useContext } from "react"
import { AvgContext } from "./Table"

const Subject = ({ subject, mark }) => {
  const { average } = useContext(AvgContext)

  average.push(mark)

  return (
    <tr>
      <td>{subject}</td>
      <td>{mark}</td>
    </tr>
  )
}

export default Subject
