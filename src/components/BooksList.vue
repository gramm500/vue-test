<template>
	<div>
		
		<ul class="container-fluid d-flex justify-content-center flex-wrap">
			<BooksItem
				v-for="(book, index) in getAllBooks"
				:key="index"
				:book="book"
			/>
		</ul>
	</div>
</template>

<script>
import {mapGetters} from 'vuex';
import BooksItem from "@/components/BooksItem";

export default {
	name: "BooksList",
	components: {BooksItem},
	computed: {
		...mapGetters({
			getAllBooks: 'allBooks'
		}),
	},
}
</script>