import { Route,Routes } from 'react-router-dom'
import './App.css'
import  Navigation  from './components/Navigation/Navigation'
import HomePage from './pages/HomePage'
import PaymentsPage from './pages/PaymentsPage'
import NotFoundPage from './pages/NotFoundPage'

export default function App () {
  return (
    <div>
      <h1>React Router 5</h1>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/payments' element={<PaymentsPage />} />
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}