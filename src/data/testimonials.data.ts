type TestimonialType = {
    name: string;
    title?: string;
    company: string;
    message?: string;
    image?: string;
};

export const testimonials: TestimonialType[] = [
    {
        name: "David Martinez",
        title: "Online Shopper",
        company: "",
        message:
            "I stumbled upon HeartWood while browsing for furniture online, and I'm so glad I did. Not only did they have exactly what I was looking for, but the entire shopping experience was seamless and enjoyable. The website is user-friendly, the product descriptions are detailed, and the checkout process is straightforward. Plus, the furniture arrived promptly and in perfect condition. HeartWood has earned a loyal customer in me.",
        image: "/testimonials/testimonial-1.jpg",
    },
    {
        name: "Emily Johnson",
        title: "Interior Designer",
        company: "Johnson Designs",
        message:
            "I've been consistently impressed with the quality and variety of furniture available at HeartWood. As an interior designer, it's crucial for me to find pieces that not only look great but also stand the test of time. HeartWood delivers on both fronts. I highly recommend them to anyone looking to elevate their space with stylish and durable furniture.",
        image: "/testimonials/testimonial-2.jpg",
    },
    {
        name: "Michael Smith",
        title: "Homeowner",
        company: "Smith Residence",
        message:
            "HeartWood exceeded my expectations in every way. From the moment I placed my order to the delivery of my beautiful furniture, the experience was seamless. The craftsmanship is exceptional, and the pieces have transformed my home into a cozy haven. I'm thrilled with my purchase and would wholeheartedly recommend HeartWood to anyone in search of quality furniture.",
        image: "/testimonials/testimonial-3.jpg",
    },
    {
        name: "Sarah Thompson",
        title: "Business Owner",
        company: "Thompson Interiors",
        message:
            "HeartWood has become my go-to furniture destination for all my design projects. The curated selection of timeless pieces ensures that I can find the perfect fit for any space, whether it's a cozy corner in a café or a sophisticated office setting. The customer service is exceptional, and the quality of the furniture is unmatched. I trust HeartWood to consistently deliver excellence.",
        image: "/testimonials/testimonial-4.jpg",
    },
];
