import axios from "axios"



let apiKey = process.env.API_KEY

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Bearer ${apiKey}`}
    
})

export default api