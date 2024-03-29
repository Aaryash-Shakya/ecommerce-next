import Explore from "@/components/Explore";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";

export default function Home() {
	return (
		<>
			{/* fixed top navigation */}
			<Navbar />
			
			{/* landing hero */}
			<Hero />
			<Explore />
			<Popular />
			<Features />

			{/* footer */}
			<Footer />
		</>
	);
}
