// src/components/HabitForm.js
import React, { useState } from 'react'
import API from '../api'
import { useNavigate } from 'react-router-dom'

const HabitForm = ({ existingHabit }) => {
  const [title, setTitle] = useState(existingHabit ? existingHabit.title : '')
  const [description, setDescription] = useState(
    existingHabit ? existingHabit.description : ''
  )
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (existingHabit) {
        await API.put(`/habits/${existingHabit._id}`, { title, description })
      } else {
        await API.post('/habits', { title, description })
      }
      navigate('/')
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Description:</label>
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <button type="submit">
        {existingHabit ? 'Update Habit' : 'Add Habit'}
      </button>
    </form>
  )
}

export default HabitForm
