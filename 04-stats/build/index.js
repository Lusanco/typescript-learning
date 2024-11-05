"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const MatchResult_1 = require("./MatchResult");
const reader = new MatchReader_1.MatchReader("football.csv");
reader.read();
const dateOfFirstMatch = reader.data[0][0];
console.log(reader.data[0]);
let manUnitedWins = 0;
for (let match of reader.data) {
    if (match[1] === "Main United" && MatchResult_1.MatchfResult.HomeWin === "H") {
        manUnitedWins++;
    }
    else if (match[2] === "Man United" && MatchResult_1.MatchfResult.AwayWin === "A") {
        manUnitedWins++;
    }
}
console.log(`Man United won ${manUnitedWins} games`);
