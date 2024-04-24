import { ProductApiClient } from "@/apiClients/ProductApiClient";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@prisma/client";

export default async function ProductList() {
    throw new Error("tata");
    
    const res = await ProductApiClient.getAllProducts();
    if(!res.ok){
        throw new Error("Failed to fetch data");
    }
    const resJson:{message:string, data:Product[]} = await res.json();
    
    const mapProducts = () => {
        return resJson.data.map((item) => {
            return <ProductCard key={item.id} product={item} />;
        });
    };
    return <>{mapProducts()}</>;
}
