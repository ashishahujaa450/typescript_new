import { MatchData } from './MatchData';

import { WinAnalysis } from './Analyzers/WinsAnalysis';
import { HtmlReport } from './ReportTargets/HtmlReports';

export interface Analyzer {
  run(matches: MatchData[]): string;
}

export interface OutputTarget {
  print(report: string): void;
}

export class Summary {
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {}

  buildAndPrintReport(match: MatchData[]) {
    const output = this.analyzer.run(match);
    this.outputTarget.print(output);
  }

  static winAnalysisWithHtmlReport(TeamName: string): Summary {
    return new Summary(new WinAnalysis(TeamName), new HtmlReport());
  }
}
