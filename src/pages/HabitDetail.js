// src/pages/HabitDetail.js
import React, { useEffect, useState } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import API from '../api'
import HabitCalendar from '../components/Calendar'

const HabitDetail = () => {
  const { id } = useParams()
  const [habit, setHabit] = useState(null)
  const navigate = useNavigate()

  const fetchHabit = async () => {
    try {
      const res = await API.get(`/habits/${id}`)
      setHabit(res.data)
    } catch (err) {
      console.error(err)
    }
  }

  const handleDelete = async () => {
    try {
      await API.delete(`/habits/${id}`)
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    fetchHabit()
    // eslint-disable-next-line
  }, [id])

  if (!habit) return <div>Loading...</div>

  return (
    <div>
      <h2>{habit.title}</h2>
      <p>{habit.description}</p>
      <Link to={`/edit-habit/${habit._id}`}>Edit Habit</Link>
      <button onClick={handleDelete}>Delete Habit</button>
      <h3>Progress</h3>
      <HabitCalendar habitId={habit._id} />
    </div>
  )
}

export default HabitDetail
