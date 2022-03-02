import axios from "axios"

const token = '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'
const api = axios.create({
    baseURL:"https://api.github.com/users/",
    Headers:{
        Authorization: 'Bearer' + token
    }
})

export default api