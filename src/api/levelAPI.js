import {API_URL} from '@env';
const api = "http://188.166.54.87";

async function getLevelStatus(level) {
    let response = await fetch(api + '/levels/' + level + '/status');
    let data = await response.json();
    return data
}

export {
    getLevelStatus
}
