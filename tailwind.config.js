/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		'./components/**/*.{js,vue,ts}',
		'./layouts/**/*.vue',
		'./pages/**/*.vue',
		'./plugins/**/*.{js,ts}',
		'./nuxt.config.{js,ts}',
	],
	theme: {
		screens: {
			fold: { max: '300px' },
			mobile: { max: '640px' },
			'mb-notfold': { min: '320px', max: '640px' },
			'not-mobile': { min: '768px' },
			tablet: { max: '1024px' },
			laptop: { max: '1280px' },
			desktop: { min: '1281px' },
		},
		colors: {
			brand: {
				primary: 'var(--color-emerald-600)',
				secondary: 'var(--color-gray-400)',
			},
			hover: {
				primary: 'var(--color-hover-btn-primary)',
				secondary: 'var(--color-gray-500)',
				danger: 'var(--color-red-600)',
			},
			disabled: {
				primary: 'var(--color-disabled-btn-primary)',
				secondary: 'var(--color-gray-300)',
				danger: 'var(--color-red-200)',
			},
			color: {
				dark: 'var(--color-gray-800)',
				white: 'var(--color-white)',
				medium: 'var(--color-gray-600)',
				bland: 'var(--color-gray-300)',
				light: 'var(--color-light)',
				disabled: 'var(--color-gray-400)',
				primary: 'var(--color-emerald-700)',
				brand_primary: 'var(--color-emerald-600)',
				'backdroup-light': 'var(--color-white)',
				reverse: 'var(--color-white)',
				'input-default': 'var(--color-gray-400)',
				'border-01': 'var(--color-gray-300)',
			},
			support: {
				warning: 'var(--color-amber-500)',
				danger: 'var(--color-red-500)',
				success: 'var(--color-green-500)',
				info: 'var(--color-blue-500)',
			},
			bg: {
				'01': 'var(--color-gray-100)',
				'02': 'var(--color-white)',
				'03': 'var(--color-emerald-50)',
				'04': 'var(--color-emerald-200)',
				'05': 'var(--color-gray-400)',
				border: 'var(--color-gray-300)',
			},
			transparent: 'transparent',
			current: 'current',
			inherit: 'inherit',
		},
		extend: {
			spacing: {
				'size-button-01': 'var(--size-l)',
				'size-button-02': 'var(--size-m)',
				'size-input': 'var(--size-l)',
			},
			fontWeight: {
				xl: 'var(--font-weight-xl)',
				l: 'var(--font-weight-l)',
				m: 'var(--font-weight-m)',
				base: 'var(--font-weight-base)',
			},
			fontSize: {
				icons: '20px',
				'heading-01': [
					'var(--font-size-6xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-base)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-02': [
					'var(--font-size-5xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-base)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-03': [
					'var(--font-size-4xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-base)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-04': [
					'var(--font-size-l)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-05': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-06': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'heading-07': [
					'var(--font-size-7)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-base)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				editor: [
					'var(--font-size-m)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-xl': [
					'var(--font-size-2xl)',
					{
						fontWeight: 'var(--font-weight-m)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-l': [
					'var(--font-size-xl)',
					{
						fontWeight: 'var(--font-weight-m)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-s': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-m)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-xs': [
					'var(--font-size-s)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-m': [
					'var(--font-size-m)',
					{
						fontWeight: 'var(--font-weight-m)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-01': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-02': [
					'var(--font-size-m)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-24)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-03': [
					'var(--font-size-s)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-04': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-l)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'body-05': [
					'var(--font-size-xs)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				button: [
					'var(--font-size-m)',
					{
						fontWeight: 'var(--font-weight-l)',
						lineHeight: 'var(--font-height-custom)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				label: [
					'var(--font-size-xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-100)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				error: [
					'var(--font-size-s)',
					{
						fontWeight: 'var(--font-weight-l)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				link: [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-base)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-underline)',
					},
				],
				code_mirror: [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-size-m)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'primary-button': [
					'var(--font-size-m)',
					{
						fontWeight: 'var(--font-weight-l)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-underline)',
					},
				],
				'title-l': [
					'var(--font-size-2xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-150)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'title-m': [
					'var(--font-size-xl)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-100)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'title-s': [
					'var(--font-size-base)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-100)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
				'title-xs': [
					'var(--font-size-s)',
					{
						fontWeight: 'var(--font-weight-xl)',
						lineHeight: 'var(--font-height-100)',
						fontStyle: 'var(--font-style-normal)',
					},
				],
			},
			fontFamily: {
				inter: ['inter', 'sans-serif'],
				root: ['Raleway', 'sans-serif'],
			},
			boxShadow: {
				'shadow-1': '0px 1px 4px rgba(0, 0, 0, 0.2)',
				'shadow-2': '0px 2px 10px rgba(0, 0, 0, 0.2)',
				'shadow-btn-primary': '6px 6px 12px rgba(26, 91, 218, 0.25)',
				'shadow-hover-btn-primary': '6px 6px 25px rgba(26, 91, 218, 0.5)',
				input: '0 0 0 1px var(--color-emerald-500) ',
			},
			borderRadius: {
				pill: 'var(--radius-pill)',
				circle: 'var(--radius-circle)',
				m: 'var(--radius-rounded-m)',
				s: 'var(--radius-rounded-s)',
				sharp: 'var(--radius-sharp)',
			},
			letterSpacing: {},
			height: {
				'100v': '100vh',
				header: 'var(--height-header)',
			},
			width: {
				'100v': '100vw',
				116: '30rem',
				header: 'var(--width-header)',
				'sub-content': 'var(--width-sub-content)',
			},
			maxWidth: {
				header: 'var(--max-width-header)',
				'sub-content': 'var(--max-width-sub-content)',
				1280: '1280px',
			},
			dropShadow: {
				'global-1': '0px 1px 4px rgba(0, 0, 0, 0.2)',
			},
		},
	},
	plugins: [],
}
