import { useParams } from "react-router-dom"
import { useEffect, useState } from "react"
import { NavLink, Outlet } from "react-router-dom"

export default function PaymentDetailsPage() {
  const { paymentId } = useParams()
  const [payment, setPayment] = useState(null)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("/payments.json")
        const data = await res.json()
        const found = data.find(p => String(p.id) === paymentId)
        if (!found) setError(true)
        else setPayment(found)
      } catch {
        setError(true)
      }
    }

    getData()
  }, [paymentId])

  if (error) return <p>Платіж не знайдено</p>
  if (!payment) return <p>Завантаження...</p>

  return (
    <div>
        <div>
      <h2>Payment Details: {paymentId}</h2>
      <p>Card Name: {payment.cardName}</p>
      <p>Card Number: {payment.cardNumber}</p>
      <p>Card Type: {payment.cardType}</p>
      <p>Date: {payment.date}</p>
      <p>Amount: {payment.amount}</p>
      <p>Description: {payment.descriptions}</p>
      <p>Status: {payment.isPaid ? "Paid" : "Not Paid"}</p>
        </div>
    <ul>
        <li>
            <NavLink to="client">Client info</NavLink>
        </li>
        <li>
            <NavLink to="receipt">Payment Receipt</NavLink>
        </li>
    </ul>
    <Outlet/>
    </div>
  )
}
