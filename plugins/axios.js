export default function (
	{ $axios, redirect, store, $auth, $cookies, app },
	inject
) {
	$axios.onRequest((config) => {
		$axios.setHeader(
			'X-LANG',
			app.$cookies.get('lang') || app.i18n.fallbackLocale
		)
		$axios.setHeader('Access-Control-Allow-Origin', ' *')
		$axios.setHeader(
			'Access-Control-Allow-Method',
			' GET, PUT, POST, DELETE, OPTIONS, post, get'
		)
		$axios.setHeader('Access-Control-Max-Age', '3600')
		$axios.setHeader(
			'Access-Control-Allow-Headers',
			' Origin, Content-Type, X-Auth-Token'
		)
		$axios.setHeader('Access-Control-Allow-Credentials', 'true')
	})

	$axios.onError((error) => {
		if (error.response.status === 403) {
			redirect('/403')
		}
	})
}
