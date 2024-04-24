import Navbar from "@/components/Navbar";
import React from "react";

function Loading() {
    return (
        <>
            <Navbar />
            <div className="grid h-full w-full place-content-center">
                <div className="flex-center gap-2 w-full">
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                    <div className="dots"></div>
                </div>
            </div>
        </>
    );
}

export default Loading;
