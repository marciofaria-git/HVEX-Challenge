import axios from "axios"

let tokenStr = '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'

const api = axios.create({
    baseURL:"https://api.github.com/users/",
     headers: {"Authorization" : `basic ${tokenStr}`}
    
})

export default api