import {API_URL} from '@env';
const api = "http://192.168.2.6:3001";

async function getRooms() {
    let response = await fetch(api + '/rooms');
    let data = await response.json();
    return data;
}

async function getRoomCurrentStatus(roomId) {
    let response = await fetch(api + '/' + roomId + '/currentstatus');
    let data = await response.json();
    return data;
}

export {
    getRooms
}