<template>
	<modal
		name="updateBook"
		@before-open="beforeOpen"
		:scrollable="true"
		height="auto"
	>
		<BooksForm :book="book" @createBook="$modal.hide('updateBook')"/>
	</modal>
</template>

<script>
import BooksForm from "@/components/BooksForm";
export default {
	name: 'BooksFormModal',
	components: {BooksForm},
	data() {
		return {
			book: null
		}
	},
	methods: {
		beforeOpen(event) {
			this.book = event.params.book;
		}
	},
}
</script>