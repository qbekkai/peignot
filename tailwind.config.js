/** @type {import('tailwindcss').Config} */
module.exports = {
	daisyui: {
		themes: [],
	},
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontSize: {
				XL: '30rem',
			},
			lineHeight: {
				XL: '50rem',
			},
			spacing: {
				'up-upper': '11rem',
				'up-lower': '18rem',
				'down-upper-lower': '31.6rem',
				'down-lower': '36.8rem',
				'no-nav': 'calc(100vh - 36px)',
				'no-foot': 'calc(100vh - 96px)',
				'no-nav-no-foot': 'calc(100vh - 36px - 96px)',
				'full-m16': 'calc(100% - 4.25rem)',
			},
			fontFamily: {
				peignot: ['Peignot'],
				sans: ['Nunito'],
			},
			fontWeight: {
				bolder: 900,
			},
			colors: {
				card: 'rgb(255,255,255,.75)',
				'white-900': 'rgba(255,255,255,.9)',
			},
			backgroundImage: {
				peignot: "url('/bg_peignot.svg')",
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [require('daisyui')],
};
