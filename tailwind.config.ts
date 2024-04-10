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
			container: {
				center: true,
				padding: "1.5rem",
			},
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
				"faint-green": "#caf3e5",
				"faint-blue": "#e0eff6",
				"faint-purple": "#eeebff",
				"faint-orange": "#fff4e7",
				"faint-gray": "#fdfbf8",
				"faint-red": "#f9d9da",
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
