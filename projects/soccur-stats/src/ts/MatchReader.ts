import { dateStringtoDate } from './utils';
import { MatchResult } from './MatchResult';
import { MatchData } from './MatchData';
import { MatchCsvData } from './inheritence/MatchReader';
import { CsvFileReader } from './CsvFileReader';

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];

  constructor(public reader: DataReader) {}

  static fromCsv(filename: string) {
    return new MatchReader(new CsvFileReader(filename));
  }

  load(): void {
    //reading data according to type of file
    this.reader.read();

    //doing transformation after reading file
    this.matches = this.reader.data.map(
      (row: string[]): MatchData => {
        return [
          dateStringtoDate(row[0]),
          row[1],
          row[2],
          parseInt(row[3]),
          parseInt(row[4]),
          row[5] as MatchResult,
          row[6]
        ];
      }
    );
  }
}
