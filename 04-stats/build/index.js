"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const CSVFileReader_1 = require("./CSVFileReader");
const reader = new CSVFileReader_1.CSVFileReader("football.csv");
reader.read();
var MatchfResult;
(function (MatchfResult) {
    MatchfResult["HomeWin"] = "H";
    MatchfResult["AwayWin"] = "A";
    MatchfResult["Draw"] = "D";
})(MatchfResult || (MatchfResult = {}));
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Main United" && MatchfResult.HomeWin === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && MatchfResult.AwayWin === "A") {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
