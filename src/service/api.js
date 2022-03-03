import axios from "axios"

let tokenStr = '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'

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `Bearer ${tokenStr}`}
    
})

export default api