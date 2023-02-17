import appStore from '~/store/local/app'
import { LANGUAGE_KEY } from '@/constants'

const languageService = {
	setLanguage(ctx, language) {
		if (ctx.$i18n.locale !== language) {
			ctx.$i18n.locale = language
			appStore().setLanguage(language)
			ctx.$cookies.set(LANGUAGE_KEY, language)
		}
	},
	getLanguage(ctx) {
		return ctx.$cookies.get(LANGUAGE_KEY)
	},
}

export default languageService
