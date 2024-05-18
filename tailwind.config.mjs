/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			width: {
				'60': '60%',
				'80' : '80%',
				'40' : '40%',
			  },
			colors: {
				'dark-color': '#121212',
				  'light-color': '#E7E7E7',
				  'main-melon': '#FFAC9A',
				  'darkaccent' : '#252C24',
				  'accent' :'#C2EABD',
				  'purple-o' : '#000814',
				  'purple-b' : '#01161e',

				  
			},

			fontFamily: {
				'Lato': ['Lato', 'sans-serif'],
				'Alice': ['Alice', 'serif'],

			},

			stroke: {
				'5' : '5px'
			},

			fontSize: {
				'5xl' : '55px',
				'7xl' :'75px',
				'28xl': '280px',
				'xxxl' : '45px'
			},

			rotate:{
				'7deg' : '7deg',
				'10deg' : '10deg'
			}
			

		},
		
		
	},
	plugins: [],
}
