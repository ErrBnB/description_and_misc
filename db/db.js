const mysql = require('mysql');

const options = {
    host: 'localhost',
    user: 'root',
    database: 'errbnb'
}

const connection = mysql.createConnection(options);

const saveBasics = (data) => {
    console.log(data);
    connection.query("INSERT INTO basics SET ?", data, (err, results, field) => {
        if (err) throw (err);
    });
}

const saveDescs = (data) => {
    connection.query("INSERT INTO descriptions SET ?", data, (err, results, field) => {
        if (err) throw (err);
    });
}

const saveAmenity = (data) => {
    console.log(data);
    connection.query("INSERT INTO house_amenities (house_id, amenity_id, owner_comment) VALUES ?", [data], (err, results, field) => {
        if (err) throw (err);
    });
}

var saveAll = (records) => {
    records.forEach(record => {
        saveBasics(record.basic);
        saveDescs(record.descs);
        saveAmenity(record.amenity);
    });

}

module.exports.saveAll = saveAll;