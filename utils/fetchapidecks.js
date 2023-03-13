import axios from 'axios'

function getAllProducts() {
  return axios.get('http://localhost:8000/api/products')
    .then(response => {
      return response.data
    })
    .catch(error => {
      // eslint-disable-next-line no-console
      console.error(error)
    })
}

export default getAllProducts