import { ConsoleRport } from "./reportTargets/ConsoleReport";
import { CSVFileReader } from "./CSVFileReader";
import { MatchReader } from "./MatchReader";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { Summary } from "./Summary";

// Create object that satisfies the DataReader Interface
const csvFileReader = new CSVFileReader("football.csv");

// Create instance of MatchReader and pass in
// something satisfying DataReader interface
const matchReader = new MatchReader(csvFileReader);
matchReader.load();

const summary = new Summary(new WinsAnalysis("Man United"), new ConsoleRport());

summary.buildAndPrintReport(matchReader.matches);
