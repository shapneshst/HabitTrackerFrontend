// src/components/HabitList.js
import React, { useEffect, useState } from 'react'
import API from '../api'
import { Link } from 'react-router-dom'

const HabitList = () => {
  const [habits, setHabits] = useState([])

  const fetchHabits = async () => {
    try {
      const res = await API.get('/habits')
      setHabits(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchHabits()
  }, [])

  return (
    <div>
      <h2>Your Habits</h2>
      <Link to="/add-habit">Add Habit</Link>
      <ul>
        {habits.map((habit) => (
          <li key={habit._id}>
            <Link to={`/habit/${habit._id}`}>{habit.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default HabitList
