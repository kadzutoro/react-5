import { Link } from 'react-router-dom'

export const PaymentCard = ({ payment }) => {
    return(
        <div>
            <p>Amount: ${payment.amount}</p>
            <p>Description: {payment.descriptions}</p>
            <Link to={`/payments/${payment.id}`}>Details</Link>
        </div>
    )
}
