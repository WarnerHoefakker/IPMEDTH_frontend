// test api calls, later voor verschillende onderdelen verschillende bestanden maken
import {API_URL} from '@env';


async function getCO2() {
    let response = await fetch(API_URL + '/co2');
    let data = await response.json();
    return data.value;
}

async function getRFID() {
    let response = await fetch(API_URL + '/rfid');
    let data = await response.json();
    return data.tag;
}

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
    getCO2,
    getRFID,
    getRooms,
    getRoomCurrentStatus
}