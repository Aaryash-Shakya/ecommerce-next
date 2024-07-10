import Image from "next/image";
import React from "react";

type PopularItemPropsType = {
    index: number;
    itemId: number;
    name: string;
    price: number;
    image: string;
};

const PopularItem: React.FC<PopularItemPropsType> = ({
    index,
    itemId,
    name,
    price,
    image,
}) => {
    return (
        <a className="carousel-item" href={`/product/${itemId}`}>
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
                    src={`/furniture/${image}-banner.avif`}
                    alt={name}
                    width={200}
                    height={200}
                    className="mx-auto shadow-lg hover:scale-[1.02] ease-in-out"
                />
                <p className="mt-4 font-semibold">{name}</p>
                <p className="mt-4">Minimal single chair</p>
                <p className="mt-2 font-semibold">RS {price}</p>
            </div>
        </a>
    );
};

export default PopularItem;
