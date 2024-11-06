import { MatchReader } from "./MatchReader";
import { MatchfResult } from "./MatchResult";
import { CSVFileReader } from "./CSVFileReader";

// Create object that satisfies
// the DataReader Interface
const csvFileReader = new CSVFileReader("football.csv");

// Create instance of MatchReader and pass in
// something satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

// matchReader.matches

// console.log(`Man United won ${manUnitedWins} games`);
