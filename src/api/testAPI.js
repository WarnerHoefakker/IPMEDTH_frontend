// test api calls, later voor verschillende onderdelen verschillende bestanden maken

async function getCO2() {
    let response = await fetch('http://localhost:3000/co2');
    let data = await response.json();
    return data.value;
}

async function getRFID() {
    let response = await fetch('http://localhost:3000/rfid');
    let data = await response.json();
    return data.tag;
}

export {
    getCO2,
    getRFID
}