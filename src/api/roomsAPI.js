import {API_URL} from '@env';
const api = "http://188.166.54.87";

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

async function getRoomHistory(roomId) {
    let response = await fetch(api + '/rooms/' + roomId + '/history');
    let data = await response.json();
    return data;
}

async function getRoomPrediction(roomId) {
    let response = await fetch(api + '/rooms/' + roomId + '/averageOccupation');
    let data = await response.json();
    return data;
}

export {
    getRooms,
    getRoomHistory,
    getRoomPrediction,
    getRoomCurrentStatus
}
