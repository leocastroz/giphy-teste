<script>
export default {
	props: {
		loading: {
			type: Boolean,
			required: true
		},
		error: {
			type: Boolean,
			required: true
		}
	}
}
</script>

<template>
	<div>
		<div v-if="loading" class="flex justify-center items-center">
			<div
				class="animate-spin rounded-full h-10 w-10 border-dashed border-2 border-white border-t-5 border-b-2 bg-gradient-to-r from-purple-700 to-pink-700">
			</div>
		</div>
		<div class="mt-10 text-3xl text-center text-pink-500" v-else-if="error">
			Ops.. Ocorreu um erro ao carregar os Gifs.
		</div>
	</div>
</template>
  
