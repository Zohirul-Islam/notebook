import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './routes/ProtectedRoute'
import Create from './pages/Create'
import NotesList from './pages/NotesList'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Login/> } />
        <Route path='/register' element={<Register/> } />
        
        <Route path='/dashboard' element={<ProtectedRoute><Dashboard /></ProtectedRoute>} >
          <Route index element={ <NotesList/>} />
          <Route path='create' element={<Create/> } />
        </Route>
      </Routes>
    </>
  )
}

export default App