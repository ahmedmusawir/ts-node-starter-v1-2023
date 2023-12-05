import CSVWriter from "../modules/CSVWriter.js";

interface Payment {
  id: number;
  name: string;
  role: string;
  salary: number;
}

export const empWriter = new CSVWriter<Payment>([
  "id",
  "name",
  "role",
  "salary",
]);
