import { useEffect, useState } from "react"
import  PaymentList  from "../components/PaymentList"

export default function PaymentsPage() {
  const [payments, setPayments] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {
        setIsLoading(true)
        setError(false)
        const res = await fetch("/payments.json")
        const data = await res.json()
        setPayments(data)
      } catch (error) {
        setError(true)
      } finally {
        setIsLoading(false)
      }
    }

    getData()
  }, [])

  return (
    <div>
  <h2>Payments</h2>
  {isLoading && <p>Loading...</p>}
  {error && <p>Something went wrong</p>}
  <PaymentList payments={payments} />
  </div>
  )
}