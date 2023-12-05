//---------------------
// CSV Writer
//---------------------
import { appendFileSync } from "fs";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

type PaymentColumns = ("id" | "amount" | "to" | "notes")[];

class CSVWriter {
  private csv: string;

  constructor(private columns: PaymentColumns) {
    this.csv = "\n" + this.columns.join(",") + "\n";
    // console.log("CSV Class Instantiated... ", this.csv);
  }

  save(filename: string): void {
    appendFileSync(filename, this.csv);
    this.csv = "\n";

    console.log("File saved to: ", filename);
  }

  addRows(values: Payment[]): void {
    let rows = values.map((v) => this.formatRow(v));

    this.csv += rows.join("\n");

    console.log(this.csv);
  }

  private formatRow(p: Payment): string {
    return this.columns.map((col) => p[col]).join(",");
  }
}

export default CSVWriter;
