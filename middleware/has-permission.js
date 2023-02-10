export default function({
  isHMR,
  app,
  store,
  route,
  params,
  error,
  redirect
}) {
  let permissions = []
  route.meta.forEach((meta) => {
    permissions = permissions.concat(meta.permissions)
  })
  let check = true
  permissions.forEach((permission) => {
    check = check && store.state.authentication.permissions.includes(permission)
  })
  if (!check) redirect('/403')
}
