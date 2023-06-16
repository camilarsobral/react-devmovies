import axios from 'axios'

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        api_key: '005bc66c4e7b68be95fe255218b51e88',
        language: 'pt-BR',
        page: 1
    }
})

export default api
