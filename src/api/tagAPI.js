import {API_URL} from '@env';
const api = "http://192.168.178.123:3001";

async function addTag(tagId, appId, firebaseToken) {
    const postData = {tagId, appId, firebaseToken};

    let response = await fetch(api + '/rfid/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });

    let data = await response.json();

    return data
}

async function getTag(appId) {
    let response = await fetch(api + '/rfid/tagid/' + appId);

    let data = await response.json();
    return data
}

async function getCurrentLocation(appId) {
    let response = await fetch(api + '/people/currentlocation/' + appId);

    let data = await response.json();
    return data
}

export {
    addTag,
    getTag,
    getCurrentLocation
}
