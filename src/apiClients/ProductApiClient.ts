export class ProductApiClient {
    static async getAllProducts(): Promise<Response> {
        try {
            return await fetch(`http://localhost:3000/api/products`);
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch products");
        }
    }

    static async getProductById(data: {
        productId: number;
    }): Promise<Response> {
        try {
            return await fetch(
                `http://localhost:3000/api/product/${data.productId}`,
            );
        } catch (err) {
            console.log(err);
            throw new Error("Failed to fetch product");
        }
    }
}
