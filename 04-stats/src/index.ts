import { CSVFileReader } from "./CSVFileReader";
import { MatchfResult } from "./MatchResult";

const reader = new CSVFileReader("football.csv");
reader.read();

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Main United" && MatchfResult.HomeWin === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && MatchfResult.AwayWin === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
