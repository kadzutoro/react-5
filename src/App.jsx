import { Route,Routes } from 'react-router-dom'
import './App.css'
import  Navigation  from './components/Navigation/Navigation'
import HomePage from './pages/HomePage'
import PaymentsPage from './pages/PaymentsPage'
import NotFoundPage from './pages/NotFoundPage'
import PaymentDetailsPage from './pages/PaymentDetailsPage'
import ClientInfo from './components/Navigation/ClientInfo'
import PaymentReceipt from './components/Navigation/PaymentReceipt'

export default function App () {
  return (
    <div>
      <Navigation/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/payments' element={<PaymentsPage />} />
        <Route path='/payments/:paymentId' element={<PaymentDetailsPage />}>
          <Route path='client' element={<ClientInfo/>} />
          <Route path='receipt' element={<PaymentReceipt/>} />
        </Route>
        <Route path='*' element={<NotFoundPage />} />
      </Routes>
    </div>
  )
}