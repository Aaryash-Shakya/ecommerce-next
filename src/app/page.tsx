import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Popular from "@/components/Popular";

export default function Home() {
	return (
		<>
			{/* hero section */}
			<Hero />
			
			<Navbar />

			<Popular />
			<Footer />
		</>
	);
}
