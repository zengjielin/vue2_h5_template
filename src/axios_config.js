import axios from 'axios'
import router from './router'
import qs from 'qs'
axios.interceptors.request.use((config) => {
    if (config.method == 'post' || config.method == 'put' || config.method == 'patch' || config.method == 'get') {
        config.data = config.data || {}
        let has_files = false
        for (let i in config.data) {
            if (config.data[i] instanceof Array) {
                for (let j in config.data[i]) {
                    if (config.data[i][j] instanceof File || config.data[i][j] instanceof Blob) {
                        has_files = true
                        break
                    }
                }
            }
            if (config.data[i] instanceof File || config.data[i] instanceof Blob) {
                has_files = true
                break
            }
        }

        if (has_files) {
            const formdata = new FormData()
            for (let i in config.data) {
                if (config.data[i] instanceof Array) {
                    for (let j in config.data[i]) {
                        formdata.append(i, config.data[i][j])
                    }
                } else {
                    formdata.append(i, config.data[i])
                }
            }
            config.data = formdata
        } else {
            config.data = qs.stringify(config.data)
        }
    }
    // config.baseURL = "/funny-booking/"
    config.timeout = 10000;
    return config
})

axios.interceptors.response.use((res) => {
    if (res.status == 200) {
        res = res.data
        if (res.code == -1) {
            router.push({
                name: "Login"
            })
        }
        return res
    }
}, function (err) {
    return Promise.reject(err)
})
