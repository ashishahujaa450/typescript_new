import { MatchReader } from './MatchReader';
// import { CsvFileReader } from './CsvFileReader';

// import { ConsoleReport } from './ReportTargets/ConsoleReport';
import { WinAnalysis } from './Analyzers/WinsAnalysis';
import { Summary } from './Summary';
import { HtmlReport } from './ReportTargets/HtmlReports';

const matchreader = MatchReader.fromCsv('football.csv');

matchreader.load();

const summary = new Summary(new WinAnalysis('Man United'), new HtmlReport());

const summaryUsingStatic = Summary.winAnalysisWithHtmlReport('Man United');

// summary.buildAndPrintReport(matchreader.matches);
