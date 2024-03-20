import React from "react";
import Image from "next/image";

export default function Features() {
	return (
		<>
			<div className="w-full faint-blue py-8">
				<div className="md:container">
					<h2 className="font-playfair text-5xl text-primary-dark font-bold mb-4 text-center">Features</h2>
					<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-x-6 lg:gap-x-16">
						<div className="card text-center">
							<div className="card-body items-center gap-4">
								<Image src="/payment-method.png" alt="payment method" width={100} height={100} className="z-0" />
								<h2 className="text-3xl font-bold font-playfair">Payment Method</h2>
								<p className="text-lg mt-2">We offer flexible payment options, to make easier.</p>
							</div>
						</div>
						<div className="card text-center">
							<div className="card-body items-center gap-4">
								<Image src="/return-policy.png" alt="return policy" width={100} height={100} className="z-0" />
								<h2 className="text-3xl font-bold font-playfair">Return policy</h2>
								<p className="text-lg mt-2">You can return a product 
within 30 days.</p>
							</div>
						</div>
						<div className="card text-center">
							<div className="card-body items-center gap-4">
								<Image src="/customer-support.png" alt="customer support" width={100} height={100} className="z-0" />
								<h2 className="text-3xl font-bold font-playfair">Customer Support</h2>
								<p className="text-lg mt-2">We provide 24/7 customer support</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
