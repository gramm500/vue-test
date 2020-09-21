<template>
	<li class="m-1 " style="width: 400px">
		<div class="card">
			<div class="card-body ">
				<h3 class="card-title">Title:</h3>
				<span class="card-text">{{ book.title }}</span>
				<h3 class="card-title">Author:</h3>
				<span class="card-text"> {{ book.author }}</span>
				<h3 class="card-title">Published:</h3>
				<span class="card-text">{{ book.published }}</span>
				<h3 class="card-title">Added</h3>
				<span class="card-text"> {{ book.added }}</span>
				<h3 class="card-title">Review</h3>
				<span class="card-text"> {{ book.review }} </span>
				<div>
					<button class="btn btn-light" @click="$modal.show('updateBook', {book})">
						<i class="fas fa-pen-square"></i>
					</button>

					<button class="btn btn-light" @click="handleDelete">
						<i class="far fa-trash-alt"></i>
					</button>
				</div>
			</div>
		</div>
	</li>
</template>

<script>
import { mapActions } from "vuex";
import { ACTIONS } from "@/store/modules/types";

export default {
	name: "BooksItem",
	props: {
		book: {
			required: true,
		},
	},
	data() {
		return {
			form: {
				title: "",
				author: "",
				published: "",
				added: "",
				review: "",
			},
		};
	},
	methods: {
		...mapActions({
			deleteBook: ACTIONS.BOOK_DELETE,
		}),
		handleDelete() {
			this.$modal.show("dialog", {
				title: "THE ITEM WILL BE DELETED",
				text: "do you want to proceed?",
				buttons: [
					{
						title: "Cancel",
						handler: () => {
							this.$modal.hide("dialog");
						},
					},
					{
						title: "Delete",
						handler: () => {
							this.deleteBook(this.book);
							this.$modal.hide('dialog')
						},
					},
				],
			});
			
		},
	},
};
</script>

<style scoped>
.fa-trash-alt {
	color: red;
}
.fa-pen-square {
	color: blue;
}
li {
	text-decoration: none;
	list-style-type: none;
}
</style>
