// src/App.js
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import AddHabit from './pages/AddHabit'
import HabitDetail from './pages/HabitDetail'
import EditHabit from './pages/EditHabit'
import PrivateRoute from './utils/PrivateRoute'
import Habit from './pages/Habit'

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Routes>
          {/* Home route accessible without login */}
          <Route path="/" element={<Home />} />
          
          {/* Login and Register routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected routes */}
          <Route
            path="/habit"
            element={
              <PrivateRoute>
                <Habit />
              </PrivateRoute>
            }
          />
          <Route
            path="/add-habit"
            element={
              <PrivateRoute>
                <AddHabit />
              </PrivateRoute>
            }
          />
          <Route
            path="/habit/:id"
            element={
              <PrivateRoute>
                <HabitDetail />
              </PrivateRoute>
            }
          />
          <Route
            path="/edit-habit/:id"
            element={
              <PrivateRoute>
                <EditHabit />
              </PrivateRoute>
            }
          />
        </Routes>
      </div>
    </Router>
  )
}

export default App
