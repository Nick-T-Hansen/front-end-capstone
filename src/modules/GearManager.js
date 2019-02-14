const remoteURL = "http://localhost:5002"

export default {
    //GET expanded all (gear-user,class,quality)
    getAllGearExpanded() {
        let sessionUser = sessionStorage.getItem("userId")
        let sessionUserId = Number(sessionUser)
        console.log("userId", sessionUserId)
        return fetch(`${remoteURL}/gearItems?userId=${sessionUserId}&_expand=gearQuality&_expand=gearClass`)
        .then(e => e.json())
        //
    },
    //GET gear borrowed by the logged in user
        getBookedGear() {
            let sessionUser = sessionStorage.getItem("userId")
            let sessionUserId = Number(sessionUser)
            console.log("userId", sessionUserId)
            return fetch(`${remoteURL}/gearItems?borrowedUserId=${sessionUserId}&_expand=user`)
            .then(e => e.json())
    },
    getSharedGearArray() {
        return fetch(`${remoteURL}/gearItems?shared=true&_expand=gearQuality&_expand=gearClass&_expand=user`)
        .then(e => e.json())
        //
    },
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
    //GET all users
    getAllUsers() {
        return fetch(`${remoteURL}/users`).then(e => e.json())
    },
    //GET a specific object by querying its id
    getGearItem(id) {
        // console.log("fetch", id)
        return fetch(`${remoteURL}/gearItems/${id}`).then(e => e.json());
    },
    // GET username and email to confirm login and set session storage
    getUserDataForLogin(existingUser){
        return fetch(`${remoteURL}/users?name=${existingUser.name}&email=${existingUser.email}`)
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
        patch(gearId, patchBoolean) {
            return fetch(`${remoteURL}/gearItems/${gearId}`, {
                method: "PATCH",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(patchBoolean)
            }).then(data => data.json());
            },
    //DELETE a gear item in the GearDetails page which deletes the item from the JSON
    deleteGearItem(id) {
        return fetch(`${remoteURL}/gearItems/${id}`, {
        method: "DELETE"
        })
    },
}