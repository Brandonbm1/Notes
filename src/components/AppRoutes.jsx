import { Routes, Route, Link } from 'react-router-dom'
import NotesContainer from '../pages/NotesContainer'
import CreateNote from '../pages/CreateNote'

const AppRoutes = () => {
  return (
    <Routes >
      <Route path='/' element={<NotesContainer />} />
      <Route path='new' element={<CreateNote />} />
    </Routes>
  )
}

export default AppRoutes