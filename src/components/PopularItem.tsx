import Image from "next/image";
import React from "react";

type PopularItemPropsType = {
    index: number;
    itemId: number;
};

const PopularItem: React.FC<PopularItemPropsType> = ({ index }) => {
    return (
        <div className="carousel-item">
            <div
                className={`skeleton flex aspect-[3/4] w-64 flex-col items-start justify-center p-4 md:p-7
                    ${
                        index % 4 === 0
                            ? "bg-faint-green"
                            : index % 4 === 1
                              ? "bg-faint-blue"
                              : index % 4 === 2
                                ? "bg-faint-purple"
                                : "bg-faint-orange"
                    }
                    `}
            >
                <Image
                    src="/blue-chair.png"
                    alt="sofa"
                    width={120}
                    height={120}
                    className="mx-auto"
                />
                <p className="mt-4 font-semibold">Premium Sofa</p>
                <p className="mt-4">Minimal single chair</p>
                <p className="mt-2 font-semibold">Rs 4000</p>
            </div>
        </div>
    );
};

export default PopularItem;
