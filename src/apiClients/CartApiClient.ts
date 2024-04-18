import axios from "axios";

export class CartApiClient {
    static async getCartItems(data: { userId: number }) {
        return axios
            .get(`http://localhost:3000/api/cart/get-items/${data.userId}`)
            .then((res) => {
                console.log(res.data.message);
                return res.data;
            })
            .catch((err) => {
                console.log(err);
                return err.response.data;
            });
    }

    static async addToCart(data: {
        userId: number;
        productId: number;
        quantity: number;
    }) {
        return axios
            .post(`http://localhost:3000/api/cart/add-item`, data, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                return res.data;
            })
            .catch((err) => {
                return err.response.data;
            });
    }
}
