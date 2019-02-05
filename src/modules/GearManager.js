const remoteURL = "http://localhost:5002"

export default {
    //GET all gearItems
    getAllGearItems() {
        return fetch(`${remoteURL}/gearItems`).then(e => e.json())
    },
    //GET a specific object by querying its id
    getGearItem(id) {
        // console.log("fetch", id)
        return fetch(`${remoteURL}/gearItems/${id}`).then(e => e.json());
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
}