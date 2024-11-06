"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const CSVFileReader_1 = require("./CSVFileReader");
// Create object that satisfies
// the DataReader Interface
const csvFileReader = new CSVFileReader_1.CSVFileReader("football.csv");
// Create instance of MatchReader and pass in
// something satisfying DataReader interface
const matchReader = new MatchReader_1.MatchReader(csvFileReader);
matchReader.load();
// matchReader.matches
// console.log(`Man United won ${manUnitedWins} games`);
