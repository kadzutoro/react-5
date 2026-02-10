import { useEffect } from "react"
import { getPayments } from "../payment-api"

export default function PaymentsPage() {
  console.log('PaymentsPage render')

  useEffect(() => {
    getPayments().then(console.log).catch(console.error)
  }, [])

  return <h2>Payments</h2>
}