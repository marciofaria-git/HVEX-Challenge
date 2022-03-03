import axios from "axios"



let username = "marciofaria-git"
let password = "oreo@123"

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Basic ${btoa(`${username}:${password}`)}`}
    
})

export default api