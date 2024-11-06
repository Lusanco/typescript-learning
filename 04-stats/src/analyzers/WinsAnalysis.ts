import { MatchData } from "../MatchData";
import { Analyzer } from "../Summary";
import { MatchfResult } from "../MatchResult";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0;

    for (let match of matches) {
      if (match[1] === "Main United" && MatchfResult.HomeWin === "H") {
        wins++;
      } else if (match[2] === "Man United" && MatchfResult.AwayWin === "A") {
        wins++;
      }
    }
    return `Team ${this.team} won ${wins} games.`;
  }
}
