<template>
	<div>
		<client-only>
			<div class="main-page auth_component">
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
	import Notification from '../components/notification'
	import LoadingBar from '~/components/LoadingBar.vue'
	import ErrorComponent from '~/components/error-page/index.vue'
	import { CODE_200 } from '~/constants'
	import { mapState } from 'pinia'
	import errorStore from '~/store/local/error'

	export default {
		name: 'AuthComponent',
		components: { LoadingBar, Notification, ErrorComponent },
		data() {
			return {
				CODE_200,
			}
		},
		computed: {
			...mapState(errorStore, {
				errorCommon: 'error',
			}),
		},
		mounted() {},
		methods: {},
	}
</script>
