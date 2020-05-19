import axios from 'axios'

export default {
    api({ commit }, params) {
        return axios.post('/api/xxx/xxx', params)
    },
}