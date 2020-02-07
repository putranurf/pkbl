// axios
import axios from 'axios'

const domain = "http://localhost:7002/"

export default axios.create({
  // You can add your headers here
  baseURL: domain,
  headers: {
    "Content-type": "application/json",
  }
})
