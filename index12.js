const orders = [

    {
    id:1,
    user:"Alex",
    items: [

        {name:"Laptop",price:1200,quantity:1 },
        {name:"Mouse",price:40,quantity:2 }
        ],

    status:"completed"
    },

    {
    id:2,
    user:"Inna",
    items: [
        {name:"Keyboard",price:100,quantity:1 }
        ],
    status:"pending"
    },

    {
    id:3,
    user:"Max",
    items: [
        {name:"Monitor",price:300,quantity:2 }
        ],
    status:"completed"
    }

];

function getTotalCompletedAmount(orders) {
    let total = 0;

    for (const order of orders) {
        if (order.status === "completed") {
            for (const item of order.items) {
                total += item.price * item.quantity;
            }
        }
    }
    return total;
}

function getCompletedAmountByUser(orders, userName) {
    let result = {};
    
    for (let i =0; i < orders.length; i++) {
        const order = orders[i];
        
        if (order.status !== "completed") continue;
        if (order.user !== userName) continue;

        let orderSum = 0;
        for (let j =0; j < order.items.length; j++) {
            const item = order.items[j];
            orderSum += item.price * item.quantity;
        }

        if (!result[order.user]) {
            result[order.user] = 0;
        }

        result[order.user] += orderSum;
    }

    return result;
}

console.log(getTotalCompletedAmount(orders)); // 1880
console.log(getCompletedAmountByUser(orders, "Alex")); // { Alex: 1280 }
console.log(getCompletedAmountByUser(orders, "Max")); // { Max: 600 }