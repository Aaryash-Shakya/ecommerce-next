import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const playfair = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: {
        default: "HeartWood",
        template: "%s - HeartWood",
    },
    description: "Luxury Furniture E-commerce",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" data-theme="light">
            <head>
                <link
                    rel="shortcut icon"
                    href="./favicon.png"
                    type="image/png"
                />
            </head>
            <body className={`${inter.className} ${playfair.className}`}>
                <Navbar />
                {children}
                <ToastContainer />
                <Footer />
            </body>
        </html>
    );
}
