# Empty React App Skeleton

# Cave
Cave is my first simple CRUD application using React. Cave originated as a way for me to organize my personal camping gear. The application allows a user to:
1. Catalogue your camping gear with basic details.
2. Determine which gear they would want to share with other people using the application and allow them to view the gear and request to use it.
3. Keep track of the borrowed camping gear a user has to be able to return it back to their owner.

## Getting Started
1. clone repo using `git clone https://github.com/Nick-T-Hansen/front-end-capstone.git`
2. run `npm install`
3. copy over test data from the "Test Data" section below to be inserted into the `database.json` file located in the api folder.
4. run the JSON server at `json-server -p 5002 -w database.json`
5. `npm start`
6. create a new account and login


## Prerequisites
The Cave application utilizes React, React-Router-Dom, and Bootstrap.
1. `npm install bootstrap`
2. `npm install react-router-dom`

##Thank You
Thanks to Cohort 29 and the instruction staff at Nashville Software School for all of the great suggestions and assistance.
Thanks to Freepik and flaticon.com for the graphics.

## Test Data for JSON

``` {
  "users": [
    {
      "id": 1,
      "name": "Tyler",
      "email": "tyler@gmail.com"
    },
    {
      "id": 2,
      "name": "Nick",
      "email": "nick@gmail.com"
    },
    {
      "id": 3,
      "name": "Becky",
      "email": "becky@gmail.com"
    }
  ],
  "gearItems": [
    {
      "gearName": "REI Half Dome Tent",
      "userId": 3,
      "gearQualityId": 1,
      "gearClassId": 1,
      "notes": "sleeps 12, missing one tent stake",
      "borrowedUserId": 5,
      "shared": true,
      "id": 1
    },
    {
      "gearName": "Backpack",
      "userId": 3,
      "gearQualityId": 1,
      "gearClassId": 3,
      "notes": "60L Northface Terra pack",
      "borrowedUserId": 1,
      "shared": true,
      "id": 2
    },
    {
      "gearName": "Wool Blanket",
      "userId": 1,
      "gearQualityId": 4,
      "gearClassId": 1,
      "notes": "heavy wool, good for fall, large burn holes from last winter.",
      "borrowedUserId": "",
      "shared": false,
      "id": 4
    },
    {
      "gearName": "Headlamp",
      "userId": 1,
      "gearQualityId": 3,
      "gearClassId": 3,
      "notes": "pretty old and low lumen headlamp",
      "borrowedUserId": "",
      "shared": true,
      "id": 7
    },
    {
      "gearName": "Headlamp",
      "userId": 3,
      "gearQualityId": 2,
      "gearClassId": 3,
      "notes": "Pretty new headlamp. Three light settings.",
      "borrowedUserId": 7,
      "shared": true,
      "id": 9
    },
    {
      "gearName": "Yeti Cooler",
      "userId": 1,
      "gearQualityId": 2,
      "gearClassId": 2,
      "notes": "large cooler",
      "borrowedUserId": "",
      "shared": true,
      "id": 11
    },
    {
      "gearName": "Esbit Stove",
      "userId": 3,
      "gearQualityId": 3,
      "gearClassId": 2,
      "notes": "well loved esbit stove. You need to buy the fuel. ",
      "borrowedUserId": "",
      "shared": true,
      "id": 13
    },
    {
      "gearName": "Sleeping Pad",
      "userId": 4,
      "gearQualityId": 3,
      "gearClassId": 1,
      "notes": "old and gross. hobo had it.",
      "borrowedUserId": "",
      "shared": false,
      "id": 14
    },
    {
      "gearName": "snowboarding pants",
      "userId": 4,
      "gearQualityId": 1,
      "gearClassId": 3,
      "notes": "BECAUSE SNOWBOARD BRO",
      "borrowedUserId": "",
      "shared": false,
      "id": 15
    },
    {
      "gearName": "Hammock",
      "userId": 1,
      "gearQualityId": 1,
      "gearClassId": 4,
      "notes": "warbonnet blackbird. small hole in bug netting.",
      "borrowedUserId": "",
      "shared": false,
      "id": 16
    },
    {
      "gearName": "Sleeping Pad",
      "userId": 2,
      "gearQualityId": 4,
      "gearClassId": 1,
      "notes": "thin thermarest sleeping pad",
      "borrowedUserId": "",
      "shared": true,
      "id": 17
    },
    {
      "gearName": "Knife",
      "userId": 5,
      "gearQualityId": 4,
      "gearClassId": 5,
      "notes": "stole it from a hobo. rusty.",
      "borrowedUserId": "",
      "shared": false,
      "id": 18
    },
    {
      "gearName": "table",
      "userId": 6,
      "gearQualityId": 2,
      "gearClassId": 2,
      "notes": "cool travel table",
      "borrowedUserId": "",
      "shared": true,
      "id": 19
    },
    {
      "gearName": "truck tent",
      "userId": 7,
      "gearQualityId": 1,
      "gearClassId": 1,
      "notes": "awesome sauce",
      "borrowedUserId": "",
      "shared": true,
      "id": 20
    },
    {
      "gearName": "sleeping bag",
      "userId": 7,
      "gearQualityId": 3,
      "gearClassId": 1,
      "notes": "oldish",
      "borrowedUserId": "",
      "shared": false,
      "id": 21
    },
    {
      "gearName": "Knife",
      "userId": 2,
      "gearQualityId": 4,
      "gearClassId": 5,
      "notes": "rusty",
      "borrowedUserId": "",
      "shared": false,
      "id": 22
    },
    {
      "gearName": "Frying Pan",
      "userId": 2,
      "gearQualityId": 2,
      "gearClassId": 2,
      "notes": "cast iron frying pan",
      "borrowedUserId": "",
      "shared": false,
      "id": 23
    }
  ],
  "gearQualities": [
    {
      "id": 1,
      "quality": "like new"
    },
    {
      "id": 2,
      "quality": "very good"
    },
    {
      "id": 3,
      "quality": "good"
    },
    {
      "id": 4,
      "quality": "acceptable"
    }
  ],
  "gearClasses": [
    {
      "id": 1,
      "class": "sleeping"
    },
    {
      "id": 2,
      "class": "eating"
    },
    {
      "id": 3,
      "class": "hiking"
    },
    {
      "id": 4,
      "class": "relaxing"
    },
    {
      "id": 5,
      "class": "miscellaneous"
    }
  ]
} ```
