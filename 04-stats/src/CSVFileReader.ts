import fs from "fs";
import { MatchfResult } from "./MatchResult";

// type MatchData = [Date, string, string, number, number, MatchfResult, string];

abstract class CSVFileReader<T> {
  data: T[] = [];

  constructor(public filename: string) {}

  abstract mapRow(row: string[]): T;

  read(): void {
    this.data = fs
      .readFileSync(this.filename, {
        encoding: "utf-8",
      })
      .split("\n")
      .map((row: string): string[] => {
        return row.split(",");
      })
      .map(this.mapRow);
  }
}
