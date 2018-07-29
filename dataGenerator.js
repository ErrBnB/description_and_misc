const faker = require('faker');
const fs = require('fs');
const db = require('./db/db.js')


var basicRecord = (id) => {
    var basicRecord = {};
    basicRecord.id = id;
    basicRecord.title = faker.name.firstName() + "'s house";
    basicRecord.owner = faker.name.firstName();
    basicRecord.guests = faker.random.number({min: 1, max: 10});
    basicRecord.beds = faker.random.number({min: 1, max: 4});
    basicRecord.description = faker.lorem.paragraph();
    return basicRecord;
}

var house_amenity = (house_id) => {
    var records = [];
    var length = faker.random.number({min: 10, max: 25});
    for (var i = 0; i < length; i++) {
        var newRec = [];
        newRec.push(house_id);
        newRec.push(faker.random.number({min: 1, max: 27}));
        if (i % 3 === 0) {
            newRec.push(faker.lorem.sentence());
        } else {
            newRec.push(null);
        }
        records.push(newRec);
    }
    return records;
}

var descriptions = (house_id) => {
    var descs = {};
    descs.house_id = house_id;
    descs.space = faker.lorem.paragraph();
    descs.guest_access = faker.lorem.paragraph();
    descs.interactions = faker.lorem.paragraph();
    descs.other = faker.lorem.paragraph();
    return descs;
}

var generateData = () => {
    var records = [];
    for (var i = 0; i < 3; i++) {
        var record = {"basic": basicRecord(i), "amenity": house_amenity(i), "descs": descriptions(i)};
        records.push(record);
    }
    fs.writeFile(__dirname + "/db/records.csv", JSON.stringify(records), (err) => {
        if (err) throw (err);
        console.log("GENERATE COMPLETE");
    })
}



generateData();