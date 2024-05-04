import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import Popular from "@/components/Popular";
import Testimonials from "@/components/Testimonials";

export default function Home() {
    return (
        <>
            {/* landing hero */}
            <Hero />
            <Explore />
            <Popular />
            <Features />
            <Testimonials />
        </>
    );
}
