export class OrderApiClient {
    static async getOrders():Promise<Response> {
        try {
            return await fetch(
                `http://localhost:3000/api/order/get-orders`,
            );
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch orders");
        }
    }

    static async placeOrder(data: {
        userId: number;
        amount: number;
    }):Promise<Response> {
        try {
            return await fetch(`http://localhost:3000/api/order/place-order`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.log(err);
            throw new Error("Failed to place order");
        }
    }
}
