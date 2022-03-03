import axios from "axios"

let tokenStr = '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'

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Bearer ${tokenStr}`}
    
})

export default api