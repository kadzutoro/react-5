import axios from "axios";

axios.defaults.baseURL = 'https://6612f10053b0d5d80f669fc0.mockapi.io'

export const getPayments = async () => {
    const response = await axios.get('/payments')
    return response.data
}