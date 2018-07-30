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

var getBasic = (recordNum, callback) => {
    connection.query('SELECT * FROM basics WHERE id = ?', [recordNum], (err, results, fieled) => {
        if (err) throw (err);
        console.log('BASIC RECORD RECEIVED');
        callback(null, results);
    });
}

var getDescs = (recordNum, callback) => {
    connection.query('SELECT * FROM descriptions WHERE house_id = ?', [recordNum], (err, results, fieled) => {
        if (err) throw (err);
        console.log('DESCRIPTIONS RECORDS RECEIVED');
        callback(null, results);
    });
}

var getAmenities = (recordNum, callback) => {
    connection.query('SELECT * FROM house_amenities WHERE house_id = ?', [recordNum], (err, results, fieled) => {
        if (err) throw (err);
        console.log('AMENITIES RECORDS RECEIVED');
        callback(null, results);
    });
}

var getData = (recordNum, callback) => {
    getBasic(recordNum, (err, basicData) => {
        if (err) thorw (err);
        getDescs(recordNum, (err, descData) => {
            if (err) throw (err);
            getAmenities(recordNum, (err, ameData) => {
                if (err) throw (err);
                var errbnbData = {};
                errbnbData.basic = basicData;
                errbnbData.descriptions = descData;
                errbnbData.amenities = ameData;
                callback(null, errbnbData);
            })
        })
    })
}

module.exports = {
    saveAll,
    getData
}