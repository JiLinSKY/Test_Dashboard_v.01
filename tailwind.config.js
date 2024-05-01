/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}", "*.html"],
	theme: {
		extend: {
			fontFamily: {
				body: ["Poppins"],
			},
			fontSize: {
				xs: "0.75rem", // Устанавливаем размер шрифта text-xs
			},
			colors: {
				cGrey: "#9197B3",
			},
		},
	},
	plugins: [],
}
