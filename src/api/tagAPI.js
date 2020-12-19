import {API_URL} from '@env';

async function addTag(tagId, appId) {
    const postData = {tagId, appId};

    let response = await fetch(API_URL + '/rfid/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postData)
    });

    let data = await response.json();

    return data
}

async function getCurrentLocation(appId) {
    let response = await fetch(API_URL + '/people/currentlocation/' + appId);

    let data = await response.json();
    return data
}

export {
    addTag,
    getCurrentLocation
}