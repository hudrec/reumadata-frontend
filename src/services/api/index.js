import config from '../../services/config'

const fetchApi = (endPoint, method = 'get', payload = undefined) => {

    let headers = {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
    }
    let params = {headers, method, body: payload}
    return fetch(config.url + endPoint, params)
        .then(resp => {
                return resp.json()
            },
            err => {
                alert(err);
            })
        .catch(resp => {
            alert(resp)
        })
}

export default fetchApi;