// test api calls, later voor verschillende onderdelen verschillende bestanden maken

async function getCO2() {
    let response = await fetch('http://188.166.54.87/co2');
    let data = await response.json();
    return data.value;
}

async function getRFID() {
    let response = await fetch('http://188.166.54.87/rfid');
    let data = await response.json();
    return data.tag;
}

async function getRooms() {
    let response = await fetch('http://188.166.54.87/rooms');
    let data = await response.json();
    return data
}

export {
    getCO2,
    getRFID,
    getRooms
}