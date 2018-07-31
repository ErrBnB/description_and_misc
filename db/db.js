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
        if (err) callback(err);
        console.log('basic record received');
        callback(null, results);
    });
}

var getDescs = (recordNum, callback) => {
    connection.query('SELECT * FROM descriptions WHERE house_id = ?', [recordNum], (err, results, fieled) => {
        if (err) callback(err);
        console.log('descriptions records received');
        callback(null, results);
    });
}

var getAmenities = (recordNum, callback) => {
    connection.query('SELECT * FROM house_amenities WHERE house_id = ?', [recordNum], (err, results, fieled) => {
        if (err) callback(err);
        console.log('amenities records received');
        callback(null, results);
    });
}

// refactored version waiting for test.....
var getAmenities2 = (recordNum, callback) => {
    connection.query('SELECT amenities.category, amenities.name, house_amenities.owner_comment FROM amenities, house_amenities WHERE house_id = ? AND amenity_id = amenities.id', [recordNum], (err, results, fieled) => {
        if (err) callback(err);
        console.log('amenity records received');
        callback(null, sortRecords(results));
    });
}

var getData = (recordNum, callback) => {
    getBasic(recordNum, (err, basicData) => {
        if (err) callback(err);
        getDescs(recordNum, (err, descData) => {
            if (err) callback(err);
            getAmenities2(recordNum, (err, ameData) => {
                if (err) callback(err);
                var errbnbData = {};
                errbnbData.basic = basicData;
                errbnbData.descriptions = descData;
                errbnbData.amenities = ameData;
                callback(null, errbnbData);
            })
        })
    })
}

var sortRecords = (records) => {
    var result = {};
    var helper = {};
    records.forEach((r) => {
        if (result[r.category] === undefined) {
            result[r.category] = [[r.name, r.owner_comment]];
            helper[r.category] = [r.name];
        } else {
            if (!helper[r.category].includes(r.name)) {
                helper[r.category].push(r.name);
                result[r.category].push([r.name, r.owner_comment]);
            }
        }
    })
    return result;
}

module.exports = {
    saveAll,
    getData,
    getAmenities2
}