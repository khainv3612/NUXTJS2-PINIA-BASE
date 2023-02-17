<template>
	<h1 class="text-3xl font-bold underline text-red-50">Hello world!</h1>
</template>

<script>
	import errorService from '@/services/errorService'
	import { CODE_200 } from '@/constants'

	export default {
		name: 'IndexPage',
		async mounted() {
			errorService.setError({
				show: true,
				code: CODE_200,
				message: '',
				title: '',
				path: '',
			})
		},
	}
</script>
