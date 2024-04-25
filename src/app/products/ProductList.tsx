import { ProductApiClient } from "@/apiClients/ProductApiClient";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@prisma/client";
import { toast } from "react-toastify";

export default async function ProductList() {
    // throw new Error("tata");
    
    const res = await ProductApiClient.getAllProducts();
    if(!res.ok){
        toast.error("Error fetching products");
        return 
    }
    const resJson:{message:string, data:Product[]} = await res.json();
    
    const mapProducts = () => {
        return resJson.data.map((item) => {
            return <ProductCard key={item.id} product={item} />;
        });
    };
    return <>{mapProducts()}</>;
}
