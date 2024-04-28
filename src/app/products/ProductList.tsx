import { ProductApiClient } from "@/apiClients/ProductApiClient";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "@prisma/client";
import { toast } from "react-toastify";

export default async function ProductList({
    filters,
}: {
    filters: {
        bedroomFlag: boolean;
        kitchenFlag: boolean;
        livingRoomFlag: boolean;
        officeFlag: boolean;
        studyRoomFlag: boolean;
        sort: string;
        show: string;
    };
}) {
    // throw new Error("tata");

    const res = await ProductApiClient.getAllProducts();
    if (!res.ok) {
        toast.error("Error fetching products");
        throw new Error("Error fetching products");
    }
    const resJson: { message: string; data: Product[] } = await res.json();
    if(filters.sort === "pdesc") {
        resJson.data.sort((a, b) => b.price - a.price);
    }else if(filters.sort === "pasc") {
        resJson.data.sort((a, b) => a.price - b.price);
    }

    const mapProducts = () => {
        return resJson.data.map((item) => {
            if (
                (item.location.indexOf("living-room") !== -1 &&
                    filters.livingRoomFlag) ||
                (item.location.indexOf("study-room") !== -1 &&
                    filters.studyRoomFlag) ||
                (item.location.indexOf("kitchen") !== -1 &&
                    filters.kitchenFlag) ||
                (item.location.indexOf("office") !== -1 &&
                    filters.officeFlag) ||
                (item.location.indexOf("bedroom") !== -1 && filters.bedroomFlag)
            ) {
                return <ProductCard key={item.id} product={item} />;
            }
        });
    };
    return <>{mapProducts()}</>;
}
