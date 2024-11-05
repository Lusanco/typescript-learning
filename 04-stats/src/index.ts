import { MatchReader } from "./MatchReader";
import { MatchfResult } from "./MatchResult";

const reader = new MatchReader("football.csv");
reader.read();

const dateOfFirstMatch = reader.data[0][0];

console.log(reader.data[0]);

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Main United" && MatchfResult.HomeWin === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && MatchfResult.AwayWin === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
