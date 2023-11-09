const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./pages/**/*.{js,ts,jsx,tsx}', './forms/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	// đổi màu ở đây thì vào globals đổi màu theo (nếu có)
	theme: {
		colors: {
			label: '#6B6F82',
			warning: '#F44336',
			warningBold: '#f14f04',
			brown: '#d17905',
			info: '#2196F3',
			success: '#388E3C',
			['important-pending']: '#D32F2F',
			active: '#f14f04',
			orange: '#f14f04',
			pending: '#f57c00',
			unactive: '#ccc',
			pink: '#ff4081',
			gray: '#e6e6e6',
			purple: '#a0f',
			cyan: '#00e5ff',
			white: '#fff',
			gold: '#ff9100',
			blue: '#2196F3',
			green: '#388E3C',
			red: '#F44336',
			black: '#000',
			yellow: '#fbc02d',
			dark: '#242526',
			darkLight: '#3e4042',
			blueLight: '#0084ff',
			lightGray: '#E4E6EB',
			main: '#1E1E1E',
			lining: '#f7f1e6',
			key: '#d7d8d9',
			sideBar: '#1E1E1E',
			textMain: '#90622E'
		},
		extend: {
			colors: {},
			boxShadow: {
				custom: '0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.12), 0 1px 5px 0 rgba(0,0,0,.20)',
				sidebar: '0 16px 16px 0 rgba(0,0,0,.04), 0 1px 5px 0 rgba(0,0,0,.02), 0 3px 1px -2px rgba(0,0,0,.02)',
				statistic: '0 4px 5px 0 rgba(0,0,0,.14), 0 1px 10px 0 rgba(0,0,0,.12), 0 2px 4px -1px rgba(0,0,0,.3)',
				input: '0 0 0 2px rgba(246,67,2,.2)'
			},
			backgroundImage: {
				custom: 'repeating-linear-gradient(-45deg, transparent 0px, transparent 7px, rgba(0,0,0,0.1) 7px, rgba(0,0,0,0.1) 9px)'
			}
		},
		screens: {
			// => @media (min-width: 640px) { ... }
			xs: '480px',
			...defaultTheme.screens
		}
		// fontSize: {
		//   xs: "12px",
		// },
	},
	plugins: []
}
