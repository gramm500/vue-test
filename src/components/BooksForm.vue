<template>
	<div class="card">
		<h1>Books available: {{ amountBooks }}</h1>
		<h3 class="card-header text-center">Add a book </h3>
		<div class="card-body">
			<form
				style="max-width: 50%; margin: 0 auto;"
				@submit.prevent="handleSend"
			>
				<div class="row">
					<div class="col-12 form-group">
						<label class="col-form-label col-form-label-lg">Book Title <span class="text-danger">*</span> </label>
						<input
							v-model.trim="$v.form.title.$model"
							class="form-control form-control-lg"
							type="text"
						>
						<div v-if="$v.form.title.$error">
							<div v-if="!$v.form.title.required" class="error">Field is required</div>
							<div v-if="!$v.form.title.minLength" class="error">Name must have at least
								{{ $v.form.title.$params.minLength.min }} letters.
							</div>
						</div>
					</div>

					<div class="col-12 form-group">
						<label class="col-form-label col-form-label-lg">Book Author <span class="text-danger">*</span> </label>
						<input
							v-model.trim="$v.form.author.$model"
							type="text"
							class="form-control form-control-lg"
						>
						<div v-if="$v.form.author.$error">
							<div v-if="!$v.form.author.required" class="error">Field is required</div>
							<div v-if="!$v.form.author.minLength" class="error">Name must have at least
								{{ $v.form.author.$params.minLength.min }} letters.
							</div>
						</div>
					</div>

					<div class="col-12 form-group">
						<label class="col-form-label col-form-label-lg">Published <span class="text-danger">*</span> </label>
						<date-picker
							v-model="form.published"
							type="date"
							:editable="false"
							format="YYYY-MM-DD"
							value-type="YYYY-MM-DD"
							:disabled-date="disabledDate"
						></date-picker>
						<div v-if="$v.form.published.$error">
							<div v-if="!$v.form.published.required" class="error">Field is required</div>
						</div>
					</div>

					<div class="col-12 form-group">
						<label class="col-form-label col-form-label-lg">Added <span class="text-danger">*</span> </label>
						<date-picker
							v-model="form.added"
							type="date"
							:editable="false"
							format="YYYY-MM-DD"
							value-type="YYYY-MM-DD"
							:disabled-date="disabledDate"
						></date-picker>
						<div v-if="$v.form.published.$error">
							<div v-if="!$v.form.published.required" class="error">Field is required</div>
						</div>
					</div>

					<div class="col-12 form-group">
						<label class="col-form-label col-form-label-lg">Review</label>
						<textarea
							v-model="form.review"
							class="form-control form-control-lg"
							cols="30"
							rows="5"
						></textarea>
					</div>

					<div class="col-12 form-group">
						<button class="btn btn-vue btn-primary" @submit.prevent="handleSend"> Submit</button>
					</div>
				</div>
			</form>
		</div>
	</div>
</template>

<script>
import {required, minLength} from 'vuelidate/lib/validators';
import {mapActions, mapGetters} from 'vuex';
import {ACTIONS} from "@/store/modules/books";

export default {
	name: "booksForm",
	props: {
		book: {
			default: () => ({})
		}
	},
	data() {
		return {
			form: {
				id: +new Date,
				title: "",
				author: "",
				published: "",
				added: "",
				review: "",
			}
		}
	},
	validations: {
		form: {
			title: {
				required,
				minLength: minLength(3)
			},
			author: {
				required,
				minLength: minLength(3)
			},
			added: {
				required,
			},
			published: {
				required,
			},
		}
	},
	computed: {
		...mapGetters(['amountBooks'])
	},
	mounted() {
		if (Object.keys(this.book).length) {
			this.form.id = this.book.id;
			this.form.title = this.book.title;
			this.form.author = this.book.author;
			this.form.added = this.book.added;
			this.form.published = this.book.published;
			this.form.review = this.book.review;
		}
	},
	methods: {
		...mapActions({
			createOrUpdateBook: ACTIONS.BOOK_CREATE_OR_UPDATE
		}),
		disabledDate(date) {
			return date > new Date(new Date());
		},
		handleSend() {
			this.$v.$touch()

			if (!this.$v.$anyError) {
				this.createOrUpdateBook({
					id: this.form.id,
					title: this.form.title,
					author: this.form.author,
					published: this.form.published,
					added: this.form.added,
					review: this.form.review,

				});
				this.$emit('createBook');
			}
		},
	}
}


</script>

<style scoped>
input {
	border: 1px solid silver;
	border-radius: 4px;
	background: white;
	padding: 5px 10px;
}

.error {
	border-color: red;
	background: #FDD;
}

.error:focus {
	outline-color: #F99;
}

</style>