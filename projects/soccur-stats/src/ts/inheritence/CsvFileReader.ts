import fs from 'fs';

export abstract class CsvFileReader<typeOfData> {
  data: typeOfData[] = [];

  constructor(public fileName: string) {}

  abstract convertData(row: string[]): typeOfData;

  read(): void {
    this.data = fs
      .readFileSync(this.fileName, {
        encoding: 'utf-8'
      })
      .split('\n')
      .map((row: string): string[] => {
        return row.split(',');
      })
      .map(this.convertData);
  }
}
