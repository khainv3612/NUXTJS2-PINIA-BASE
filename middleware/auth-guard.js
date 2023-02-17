import setting from '@/utils/settings'

export default async function ({ app, store, route, error, redirect }) {
	if (!setting.isNeedLogin) {
		redirect()
		return
	}
	const publicPages = ['/', '/login', '/register', '/logout']
	const authPages = [
		'/login',
		'/register',
		'/logout',
		'/user/reset-password',
		'/forgot-pass',
	]
	const authRequired =
		!publicPages.includes(route.path) &&
		!route.path.toString().startsWith('/register')
	await app.$auth.fetchUser()
	const loggedIn = app.$auth.loggedIn
	if (authPages.includes(route.path.toString())) {
		loggedIn ? redirect('/') : redirect()
		return
	}
	if (authRequired && !loggedIn) {
		redirect({
			path: '/login',
			query: { from: route.path },
		})
	} else {
		;(route.path === '/login' ||
			route.path === '/register' ||
			route.path.toString().startsWith('/register')) &&
		loggedIn
			? redirect('/')
			: redirect()
	}
}
