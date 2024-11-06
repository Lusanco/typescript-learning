"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const CSVFileReader_1 = require("./CSVFileReader");
// Create object that satisfies
// the DataReader Interface
const csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create instance of MatchReader and pass in
// something satisfying DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
let manUnitedWins = 0;
for (let match of matchReader.matches) {
    if (match[1] === "Main United" && MatchResult_1.MatchfResult.HomeWin === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && MatchResult_1.MatchfResult.AwayWin === "A") {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
