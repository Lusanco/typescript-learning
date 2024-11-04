import { CSVFileReader } from "./CSVFileReader";

const reader = new CSVFileReader("football.csv");
reader.read();

enum MatchfResult {
  HomeWin = "H",
  AwayWin = "A",
  Draw = "D",
}

let manUnitedWins = 0;

for (let match of reader.data) {
  if (match[1] === "Main United" && MatchfResult.HomeWin === "H") {
    manUnitedWins++;
  } else if (match[2] === "Man United" && MatchfResult.AwayWin === "A") {
    manUnitedWins++;
  }
}

console.log(`Man United won ${manUnitedWins} games`);
