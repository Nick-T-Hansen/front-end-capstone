const remoteURL = "http://localhost:5002"

export default {
    //GET all gearItems
    getAllGearItems() {
        return fetch(`${remoteURL}/gearItems`).then(e => e.json())
    },
    //GET all gear qualities for addForm dropdown
    getAllGearQualities() {
        return fetch(`${remoteURL}/gearQualities`).then(e => e.json())
    },
    //GET all gear and expanded quality and class
    getAllGearItemsAndQualities() {
        return fetch(`${remoteURL}/gearItems?_expand=gearQuality&_expand=gearClass`).then(e => e.json())
    },
    //GET all gear classes for addForm dropdown
    getAllGearClasses() {
        return fetch(`${remoteURL}/gearClasses`).then(e => e.json())
    },
    //GET a specific object by querying its id
    getGearItem(id) {
        // console.log("fetch", id)
        return fetch(`${remoteURL}/gearItems/${id}`).then(e => e.json());
    },
    // GET username and email to confirm login and set session storage
    getUserDataForLogin(username, email){
        return fetch(`${remoteURL}/users?name=${username}&email=${email}`)
        .then(response => response.json())
    },
    //POST new gear item
    post(newGearItemObject) {
        return fetch(`${remoteURL}/gearItems`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newGearItemObject)
        }).then(data => data.json())
    },
     //POST new user
     postNewUser(newUser) {
        return fetch(`${remoteURL}/users`, {
            method: "POST",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        }).then(data => data.json())
    },
    //PUT (edit) gear item currently in JSON
    put(gearId, eventObject) {
        return fetch(`${remoteURL}/gearItems/${gearId}`, {
            method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify(eventObject)
        }).then(data => data.json());
        },
    //DELETE a gear item in the GearDetails page which deletes the item from the JSON
    deleteGearItem(id) {
        return fetch(`${remoteURL}/gearItems/${id}`, {
        method: "DELETE"
        })
    },
}