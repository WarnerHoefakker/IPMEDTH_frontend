import {API_URL} from '@env';

async function getRooms() {
    let response = await fetch(API_URL + '/rooms');
    let data = await response.json();
    return data
}

export {
    getRooms
}