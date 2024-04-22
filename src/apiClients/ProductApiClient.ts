import axios from "axios";

export class ProductApiClient {
    static async getAllProducts() {
        return axios
            .get(`http://localhost:3000/api/products`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    }

    static async getProductById(data: { productId: number }) {
        return axios
            .get(`http://localhost:3000/api/product/${data.productId}`)
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    }
}
