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

const ice = new IceCream('Sunday Special', 12.99);

ice.addTopings('nuts');
ice.addTopings('raisins');

console.log(ice);
