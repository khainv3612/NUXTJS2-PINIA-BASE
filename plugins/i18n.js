import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { LANGUAGE_DEFAULT, LANGUAGE_KEY } from '@/constants'

Vue.use(VueI18n)

export default ({ app, store }) => {
	app.i18n = new VueI18n({
		locale: app.$cookies.get(LANGUAGE_KEY) || LANGUAGE_DEFAULT,
		fallbackLocale: LANGUAGE_DEFAULT,
		silentTranslationWarn: true,
		messages: {
			vi: require('~/locales/vi.json'),
			en: require('~/locales/en.json'),
		},
	})
}
