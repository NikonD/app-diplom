import axios from "axios"

let useUser = async () => {
  let response = await axios({
    method: "POST",
    url: '/api/user',
    headers: {
      "Content-Type": "application/json"
    }
  })

  if (!response?.data?.err) {
    return response.data
  } else {
    return {login: false}
  }
  
}

export {useUser}