function fetchOrder(orderId) {
    return new Promise((resolve, reject) => {
        const delay = Math.random() * 1500;

        setTimeout(() => {
        const random = Math.random();

        if (random < 0.2) {
            reject(new Error('Network error'));
        } else if (random < 0.4) {
            reject(new Error('500 Internal Server Error'));
        } else {
            resolve({
            id: orderId,
            amount: Math.floor(Math.random() * 1000),
            });
        }
        }, delay);
    });
    }

    async function   retryAsync(fn, retries, delay) {
    let attempt = 0;

    while (attempt <= retries) {
        try {
        return await fn();
        } catch (error) {
        if(error.massage === 'Network error') {
            throw error;
        }

        if (attempt === retries) {
            throw new Error ('Network error');
        }

        attempt++;
        
        await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }
    }


    //-----------

    async function loadOrders(orderIds) {
    const tasks = orderIds.map(async (id) => {
        try {
        const order = await retryAsync(
            () => fetchOrder(id),
            3,
            500
        );
        return { status: "fulfilled", value: order };

        } catch (error) {
        return {
            status: "rejected",
            reason: {
            id: id,
            error: error.message
            }
        };
        }
    });

    const results = await Promise.all(tasks);
    const successful = [];
    const failed = [];

    for (const result of results) {
        if (result.status === "fulfilled") {
        successful.push(result.value);
        } else {
        failed.push(result.reason);
        }
    }

    const totalAmount = successful.reduce((sum, order) => {
        return sum + order.amount;
    }, 0);

    return {
        successful,
        failed,
        totalAmount
    };
}