import type { Config } from "tailwindcss";
import daisyui from "daisyui";
import { Playfair } from "next/font/google";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			borderRadius: {
				hero: "5rem",
			},
			colors: {
				"primary-light": "#709088",
				"primary-dark": "#07484A",
			},
			fontFamily: {
				playfair: ["Playfair Display", "serif"],
			},
		},
	},
	plugins: [daisyui],
	daisyui: {
		themes: ["light", "dark", "cupcake"],
	},
};
export default config;
