import axios, { AxiosResponse } from "axios";

export class ProductApiClient {
    static async getAllProducts(): Promise<AxiosResponse>{
        return axios
            .get(`http://localhost:3000/api/products`)
            .then((res) => {
                return res;
            })
            .catch((err) => {
                return err.response
            });
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
