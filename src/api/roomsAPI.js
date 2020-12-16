import {API_URL} from '@env';

async function getRooms() {
    let response = await fetch(API_URL + '/rooms');
    let data = await response.json();
    return data;
}

async function getRoomCurrentStatus(roomId) {
    let response = await fetch(API_URL + '/' + roomId + '/currentstatus');
    let data = await response.json();
    return data;
}

export {
    getRooms
}