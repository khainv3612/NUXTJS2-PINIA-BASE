import authService from '~/services/authService'

export default function ({
	isHMR,
	app,
	store,
	route,
	params,
	error,
	redirect,
}) {
	if (app.$auth.loggedIn) {
		let permissions = []
		authService.setRoles(
			app.$auth.user.roles.map((item) => {
				permissions = permissions.concat(
					item.permissions.map((per) => per.name)
				)
				return item.name
			})
		)
		authService.setPermissions(permissions)
	}
}
