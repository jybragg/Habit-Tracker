var connection = require('../config/connection.js');

var orm = {

    selectAll: function (cb) {
        var queryString = "SELECT * FROM habits";
        connection.query(queryString, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    insertOne: function (habit, cb) {
        var queryString = "INSERT INTO habits (habit_name) VALUES (?)";
        connection.query(queryString, [habit], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    },

    updateOne: function (id, cb) {
        var queryString = "UPDATE habits SET accepted = true WHERE id = ?";

        connection.query(queryString, [id], function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
    }
};

module.exports = orm;