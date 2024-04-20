import Navbar from "@/components/Navbar";
import React from "react";

function loading() {
    return (
        <>
            <Navbar />
            <div className="grid h-screen w-screen place-content-center">
                <div className="flex gap-2">
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

export default loading;
