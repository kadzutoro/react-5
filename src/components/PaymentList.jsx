import { PaymentCard } from './PaymentCard'

export default function PaymentList ( { payments } ) {
    if (!payments.length) return <p>No payments yet</p>
    return (
        <ul>
           {payments.map(payment => (
            <li key={payment.id}>
                <PaymentCard payment={payment}/>
            </li>
           ))} 
        </ul>
    )
}