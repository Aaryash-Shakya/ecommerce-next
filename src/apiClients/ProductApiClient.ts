import axios, { AxiosResponse } from "axios";

export class ProductApiClient {
    static async getAllProducts(): Promise<Response> {
        const res = await fetch(`http://localhost:3000/api/products`);
        // const resJson = await res.json();
        // if (!res.ok) {
        //     throw new Error("Failed to fetch data");
        // }
        return res;
    }

    static async getProductById(data: { productId: number }): Promise<AxiosResponse> {
        return axios
            .get(`http://localhost:3000/api/product/${data.productId}`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err.response;
            });
    }
}
