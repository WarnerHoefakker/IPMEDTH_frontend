import {API_URL} from '@env';
const api = "http://192.168.178.123:3001";

async function getLevelStatus(level) {
    let response = await fetch(api + '/levels/' + level + '/status');
    let data = await response.json();
    return data
}

export {
    getLevelStatus
}
