"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//convert string date into Date type
exports.dateStringtoDate = function (dateString) {
    var dateNumArr = dateString.split('/').map(function (elm) {
        return parseInt(elm);
    });
    return new Date(dateNumArr[2], dateNumArr[1] - 1, dateNumArr[0]);
};
