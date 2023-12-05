import { empWriter } from "./data-layer/EmployeeWriter.js";
import { paymentWriter } from "./data-layer/PaymentWriter.js";

paymentWriter.addRows([
  { id: 8, amount: 40, to: "supaman", notes: "this is for pot buy" },
  { id: 9, amount: 82, to: "spyaman", notes: "this is for bitch buy" },
  { id: 10, amount: 98, to: "aquaman", notes: "this is for ass buy" },
  { id: 11, amount: 48, to: "aquaman", notes: "this is for ass buy" },
]);

empWriter.addRows([
  { id: 8, name: "Grace", role: "Manager", salary: 2000 },
  { id: 9, name: "Alice", role: "Manager", salary: 3000 },
  { id: 10, name: "Bern", role: "Manager", salary: 5000 },
  { id: 11, name: "Penny", role: "Manager", salary: 9000 },
]);

paymentWriter.save("./data/payments.csv");
empWriter.save("./data/employees.csv");
