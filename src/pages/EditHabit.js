// src/pages/EditHabit.js
import React, { useEffect, useState } from 'react'
import HabitForm from '../components/HabitForm'
import API from '../api'
import { useParams } from 'react-router-dom'

const EditHabit = () => {
  const { id } = useParams()
  const [habit, setHabit] = useState(null)

  const fetchHabit = async () => {
    try {
      const res = await API.get(`/habits/${id}`)
      setHabit(res.data)
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
      <h2>Edit Habit</h2>
      <HabitForm existingHabit={habit} />
    </div>
  )
}

export default EditHabit
