import React from "react";

function ProductsLoading() {
    return (
        <>
            {Array(4)
                .fill(0)
                .map((_, index) => (
                    <div
                        key={index}
                        className="group card card-compact relative w-full rounded-md bg-base-200 shadow-lg"
                    >
                        <figure>
                            <div className="div skeleton aspect-square h-80"></div>
                        </figure>
                        <div className="card-body gap-4">
                            <div className="skeleton h-8 w-40"></div>
                            <div className="skeleton h-6 w-full"></div>
                            <div className="skeleton h-6 w-full"></div>
                        </div>
                    </div>
                ))}
        </>
    );
}

export default ProductsLoading;
