export function handleServerError(params, validates) {
  for (const key in validates) {
    if (validates[key]) {
      params[key] = validates[key].join(', ')
    }
  }
  return params
}

export function resetErrorResponse(params) {
  const objValue = {}
  for (const value in params.value) {
    objValue[value] = ''
  }
  return objValue
}
