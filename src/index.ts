import { MatchReader } from "./MatchReader";
import { Summary } from "./Summary";

//Create an object that statisfies the 'DataReader' interface

const matchReader = MatchReader.fromCsv("football.csv");
const summary = Summary.winsAnalysisWithHtmlReport("Man United");

matchReader.load();
summary.buildAndPrintReport(matchReader.matches);
