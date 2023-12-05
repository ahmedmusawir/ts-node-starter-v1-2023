type Base = "Vanilla" | "Chocolete" | "Coffee";
type Topping = "nuts" | "raisins" | "syrup";

export interface HasFormatter {
  format(): string;
}

abstract class MenuItem implements HasFormatter {
  private title: string;
  private price: number;

  constructor(title: string, price: number) {
    this.price = price;
    this.title = title;
  }

  protected getTitle(): string {
    return this.title;
  }

  protected getPrice(): number {
    return this.price;
  }

  get details(): string {
    return `${this.title} :: $${this.price}`;
  }

  abstract format(): string;
}

class IceCream extends MenuItem {
  private base: Base = "Coffee";
  private toppings: string[] = [];

  constructor(title: string, price: number) {
    super(title, price);
  }

  selectBase = (base: Base): void => {
    this.base = base;
  };

  addTopings = (topping: string): void => {
    this.toppings.push(topping);
  };

  removeToppings = (topping: string): void => {
    this.toppings = this.toppings.filter((t) => t !== topping);
  };

  format(): string {
    let formatted = this.details;

    // base
    formatted += `\n -- Icecream on a ${this.base} base`;

    // toppings
    if (this.toppings.length < 1) {
      formatted += " with no toppings";
    }
    if (this.toppings.length > 0) {
      formatted += ` with ${this.toppings.join(", ")}`;
    }

    return formatted;
  }
}

export default IceCream;
