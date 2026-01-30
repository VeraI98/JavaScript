const products = [
  { id: 1, title: "Bread", price: 2 },
  { id: 2, title: "Milk", price: 1 },
  { id: 3, title: "Cake", price: 5 },
  { id: 4, title: "Milk", price: 1 }
];

const firstMilk = products.find(product => product.title === "Milk");
const allMilks = products.filter(products => products.title === "Milk").length;