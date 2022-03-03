import axios from "axios"


//Personal Token Git-Hub
let apiKey = process.env.NEXT_PUBLIC_API_TOKEN

//Acesso a API
const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Bearer ${apiKey}`}
    
})

export default api