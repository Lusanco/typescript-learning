"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WinsAnalysis = void 0;
const MatchResult_1 = require("../MatchResult");
class WinsAnalysis {
    constructor(team) {
        this.team = team;
    }
    run(matches) {
        let wins = 0;
        for (let match of matches) {
            if (match[1] === "Main United" && MatchResult_1.MatchfResult.HomeWin === "H") {
                wins++;
            }
            else if (match[2] === "Man United" && MatchResult_1.MatchfResult.AwayWin === "A") {
                wins++;
            }
        }
        return `Team ${this.team} won ${wins} games.`;
    }
}
exports.WinsAnalysis = WinsAnalysis;
