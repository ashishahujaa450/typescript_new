import { OutputTarget } from '../Summary';
import fs from 'fs';

export class HtmlReport implements OutputTarget {
  print(data: string): void {
    const markup = `
        <div>
            <h1>Analysis Output</h1>
            <div>${data}</div>
        </div>
      `;

    fs.writeFileSync('report.html', markup);
  }
}
