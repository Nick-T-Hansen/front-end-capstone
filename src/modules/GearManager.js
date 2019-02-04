const remoteURL = "http://localhost:5002"

export default {
    //GET all gearItems
    getAllGearItems() {
        return fetch(`${remoteURL}/gearItems`).then(e => e.json())
    },
    //GET a specific object by querying its id
    getGearItem(id) {
        return fetch(`${remoteURL}/gearItems/${id}`).then(e => e.json());
    },
}