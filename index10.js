function calculatePrice(orders) {
    if (!Array.isArray(orders)) {
        return 0;
    }

    return orders.reduce((sum, order) => {
        return sum + order.price;
    }, 0);
}

const data = [
    { type: 'food', price: 130 },
    { type: 'clothes', price: 7300 },
    { type: 'other', price: 1400 },
];

console.log(calculatePrice(data)); // 8830