<template>
	<div>
		<client-only>
			<div class="main-page">
				<Notification />
				<template v-if="!errorCommon.show || errorCommon.code === CODE_200">
					<nuxt />
				</template>
				<ErrorComponent v-else :error="errorCommon" />
				<LoadingBar />
			</div>
		</client-only>
	</div>
</template>

<script>
	import { mapState } from 'pinia'
	import LoadingBar from '../components/LoadingBar'
	import Notification from '../components/notification'
	import appStore from '~/store/local/app'
	import loadingService from '~/services/loadingService'
	import notificationService from '@/services/notificationService'
	import errorStore from '~/store/local/error'
	import ErrorComponent from '~/components/error-page/index.vue'
	import { CODE_200 } from '@/constants'

	export default {
		name: 'DefaultLayout',
		components: { ErrorComponent, LoadingBar, Notification },
		data() {
			return {
				CODE_200,
			}
		},
		computed: {
			...mapState(appStore, {
				loading: 'loading',
				notification: 'notification',
			}),
			...mapState(errorStore, {
				errorCommon: 'error',
			}),
		},
		async mounted() {
			this.setNotifySuccess()
			await loadingService.stopLoading()
		},
		methods: {
			setNotifySuccess() {
				notificationService.setNotification({
					show: true,
					type: 'success',
					title: this.$t('noti.success'),
					message: this.$t('noti.welcome'),
				})
			},
		},
	}
</script>
