import axios from "axios"



let apiKey = process.env.NEXT_PUBLIC_API_TOKEN

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Bearer ${apiKey}`}
    
})

export default api