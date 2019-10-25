var orm = require("../config/orm.js");

var habit = {
    selectAll: function (cb) {
        orm.selectAll(function (res) {
            cb(res);
        });
    },
    insertOne: function (habit, cb) {
        orm.insertOne(habit, function (res) {
            cb(res);
        });
    },
    updateOne: function (id, cb) {
        orm.updateOne([id], function (res) {
            cb(res);
        });
    }
};

module.exports = habit;