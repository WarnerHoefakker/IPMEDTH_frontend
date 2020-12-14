import {API_URL} from '@env';

async function getLevelStatus(level) {
    let response = await fetch(API_URL + '/levels/' + level + '/status');
    let data = await response.json();
    return data
}

export {
    getLevelStatus
}