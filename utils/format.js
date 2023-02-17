/**
 * @param {string} money
 * @returns {String}
 */
export function formatVnMoney1(money) {
	const formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	})
	return money !== '' && money !== null && money !== undefined
		? formatter.format(money)
		: ''
}

/**
 * @param {string} money
 * @returns {String}
 */
export function formaUsdMoney(money) {
	const temp = Number(money).toFixed(6).split('.')
	const pre = Number(temp[0])
		.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
		.substring(1)
		.split('.')[0]

	return pre.toString() + '.' + temp[1].toString()
}

/**
 * @param {string} money
 * @returns {String}
 */
export function formatUsdMoneyFixed(money) {
	const temp = Number(money).toString().split('.')
	const pre = Number(temp[0])
		.toLocaleString('en-US', {
			style: 'currency',
			currency: 'USD',
		})
		.substring(1)
		.split('.')[0]

	return pre.toString() + '.' + temp[1].toString()
}

/**
 * @param {string} money
 * @returns {String}
 */
export function formatVnMoney(money) {
	const formatter = new Intl.NumberFormat('vi-VN', {
		style: 'currency',
		currency: 'VND',
	})
	return money !== '' && money !== null && money !== undefined
		? formatter
				.format(money)
				.slice(0, formatter.format(money).length - 1)
				.replaceAll('.', ',') + 'VND'
		: ''
}
