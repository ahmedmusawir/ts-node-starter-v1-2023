type Base = 'Vanilla' | 'Chocolete' | 'Coffee';
type Topping = 'nuts' | 'raisins' | 'syrup';

class IceCream {
  title: string;
  price: number;
  base: Base = 'Coffee';
  toppings: string[] = [];

  constructor(title: string, price: number) {
    this.price = price;
    this.title = title;
  }

  addTopings = (topping: Topping) => {
    this.toppings.push(topping);
  };
}

export default IceCream;
