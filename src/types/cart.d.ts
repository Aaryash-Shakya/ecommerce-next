import { Cart } from "@prisma/client";

export interface CartWithProduct extends Cart {
    product: Product;
}
