import { Analyzer } from './../Summary';
import { MatchData } from './../MatchData';
import { MatchResult } from '../MatchResult';

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}

  run(data: MatchData[]): string {
    let wins = 0;
    for (let match of data) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++;
      } else if (
        match[2] === 'Man United' &&
        match[5] === MatchResult.AwayWin
      ) {
        wins++;
      }
    }

    return `Team ${this.teamName} won ${wins} matches`;
  }
}
