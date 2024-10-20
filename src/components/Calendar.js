// src/components/Calendar.js
import React, { useEffect, useState } from 'react'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import API from '../api'
import './Calendar.css' // Create this file for custom styles

const HabitCalendar = ({ habitId }) => {
  const [date, setDate] = useState(new Date())
  const [markedDates, setMarkedDates] = useState([])

  const fetchProgress = async () => {
    const month = date.getMonth() + 1 // Months are 0-indexed
    const year = date.getFullYear()
    try {
      const res = await API.get(`/habits/${habitId}/progress`, {
        params: { month, year },
      })
      setMarkedDates(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchProgress()
    // eslint-disable-next-line
  }, [date, habitId])

  const handleDateClick = async (clickedDate) => {
    const dateStr = new Date(clickedDate).toDateString()
    const isCompleted = markedDates.some(
      (entry) =>
        new Date(entry.date).toDateString() === dateStr && entry.completed
    )

    try {
      if (isCompleted) {
        await API.post(`/habits/${habitId}/unmark`, { date: clickedDate })
      } else {
        await API.post(`/habits/${habitId}/mark`, { date: clickedDate })
      }
      fetchProgress()
    } catch (err) {
      console.error(err)
    }
  }

  const tileClassName = ({ date, view }) => {
    if (view === 'month') {
      const day = markedDates.find(
        (entry) =>
          new Date(entry.date).toDateString() === date.toDateString() &&
          entry.completed
      )
      return day ? 'completed' : null
    }
  }

  return (
    <div>
      <ReactCalendar
        onChange={setDate}
        value={date}
        tileClassName={tileClassName}
        onClickDay={handleDateClick}
      />
    </div>
  )
}

export default HabitCalendar
