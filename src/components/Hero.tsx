import React from "react";

export default function Hero() {
    return (
        <>
            <div className="hero-wrapper h-screen pb-16">
                <div
                    className="min-w-screen hero h-full overflow-hidden rounded-b-[3rem]"
                    style={{
                        backgroundImage: `url(./hero-chair.jpg)`,
                    }}
                >
                    <div className="hero-content items-center text-neutral-content md:pe-[30vw]">
                        <div className="max-w-xl text-center md:text-start">
                            <h1 className="mb-6 font-playfair text-5xl font-bold text-primary-dark drop-shadow-sm lg:text-6xl">
                                Exclusive Deals of Furniture Collection
                            </h1>
                            <p className="mb-5 text-primary-dark lg:text-lg">
                                Explore different categories. Find the best deal
                                for you.
                            </p>
                            <button className="btn-primary-light btn border-none px-8 shadow-lg">
                                Show Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
