import React from "react";
import PopularItem from "./PopularItem";

export default function Popular() {
    const mapPopularItems = (itemCount: number) => {
        // randomly initialize a null array of 8 items
        return Array(itemCount)
            .fill(null)
            .map((_, i) => <PopularItem key={i} index={i} itemId={i} />);
    };
    return (
        <>
            <h2 className="my-4 text-center font-playfair text-5xl font-bold text-primary-dark">
                Popular Products
            </h2>
            <div className="my-4 grid w-full items-center">
                <div className="carousel carousel-center mx-auto w-full max-w-screen-xl space-x-5 border-b-2 border-b-primary-dark p-4">
                    {mapPopularItems(8)}
                </div>
            </div>
        </>
    );
}
