import CSVWriter from "../modules/CSVWriter.js";

interface Payment {
  id: number;
  amount: number;
  to: string;
  notes: string;
}

export const paymentWriter = new CSVWriter<Payment>([
  "id",
  "amount",
  "to",
  "notes",
]);
