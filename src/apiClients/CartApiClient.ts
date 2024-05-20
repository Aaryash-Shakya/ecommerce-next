export class CartApiClient {
    static async getCartItems(data: { userId: number }): Promise<Response> {
        try {
            return await fetch(`http://localhost:3000/api/cart/get-items/${data.userId}`);
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch cart items");
        }
    }

    static async addToCart(data: {
        userId: number;
        productId: number;
        quantity: number;
    }): Promise<Response> {
        try {
            return await fetch(`http://localhost:3000/api/cart/add-item`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.log(err);
            throw new Error("Failed to add item to cart");
        }
    }

    static async removeFromCart(data: {
        userId: number;
        productId: number;
    }): Promise<Response> {
        try {
            return await fetch(`http://localhost:3000/api/cart/remove-item`, {
                method: "POST",
                headers: {
                    "Content-Type": `application/json`,
                },
                body: JSON.stringify(data),
            });
        } catch (err) {
            console.log(err);
            throw new Error("Failed to remove item from cart");
        }
    }
}
