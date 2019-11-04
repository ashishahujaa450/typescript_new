"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchResult_1 = require("../MatchResult");
var WinAnalysis = /** @class */ (function () {
    function WinAnalysis(teamName) {
        this.teamName = teamName;
    }
    WinAnalysis.prototype.run = function (data) {
        var wins = 0;
        for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
            var match = data_1[_i];
            if (match[1] === 'Man United' && match[5] === MatchResult_1.MatchResult.HomeWin) {
                wins++;
            }
            else if (match[2] === 'Man United' &&
                match[5] === MatchResult_1.MatchResult.AwayWin) {
                wins++;
            }
        }
        return "Team " + this.teamName + " won " + wins + " matches";
    };
    return WinAnalysis;
}());
exports.WinAnalysis = WinAnalysis;
