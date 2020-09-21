import {ACTIONS, MUTATIONS} from "@/store/modules/types";

export {ACTIONS, MUTATIONS} from './types';

const state = {
	books: [
		{id: 0, title: '1984', author: 'George Orwell', published: "1949-06-08" , added: "1952-06-08" , review: 'haha nice'},
		{id: 1, title: 'Lord of the rings', author: 'J.R.R. Tolkien',published: "1949-06-08" , added: "1952-06-08", review: 'must read'},
		{id: 2, title: 'I, Robot', author: 'Isaac Asimov',published: "1949-06-08" , added: "1952-06-08", review: 'cyberpunk'},
		{id: 3, title: 'Immortality, Inc.', author: 'Robert Sheckley',published: "1949-06-08" , added: "1952-06-08", review: 'very fresh'},
		{id: 4, title: 'Bible', author: 'God....probably',published: "1949-06-08" , added: "1952-06-08", review: 'meh...wouldn\'t recommend'},
	]
};

const getters = {
	/**
	 * Get all books
	 * @param state
	 * @returns {[{author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}]|{mutations: {createBook(*, *=): void}, state: {books: [{author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}, {author: string, review: string, title: string}]}, getters: {amountBooks(*): *, allBooks(*): *}, actions: {}}}
	 */
	allBooks(state) {
		return state.books;
	},

	/**
	 * get id of a last item
	 * @param state
	 * @returns {{author: string, review: string, id: number, title: string}|{author: string, review: string, id: number, title: string}|{author: string, review: string, id: number, title: string}|{author: string, review: string, id: number, title: string}|{author: string, review: string, id: number, title: string}}
	 */
	lastBook(state) {
		return state.books[state.books.length - 1];
	},

	/**
	 * count all books
	 * @param state
	 * @returns {number}
	 */
	amountBooks(state) {
		return state.books.length;
	}
}

const actions = {
	/**
	 * Action to create book
	 * @param commit
	 * @param payload
	 */
	[ACTIONS.BOOK_CREATE_OR_UPDATE]({commit}, payload) {
		commit(MUTATIONS.BOOK_CREATE_OR_UPDATE, payload);
	},

	/**
	 * Action to delete book
	 * @param commit
	 * @param payload
	 */
	[ACTIONS.BOOK_DELETE]({commit}, payload) {
		commit(MUTATIONS.BOOK_DELETE, payload);
	}
};

const mutations = {
	/**
	 * Mutation store
	 * @param state
	 * @param newBook
	 */
	[MUTATIONS.BOOK_CREATE_OR_UPDATE](state, newBook) {
		let getBook = state.books.find(item => item.id === newBook.id);
		if (getBook) {
			Object.assign(getBook, newBook);
		} else {
			state.books.push(newBook);
		}
	},

	/**
	 * Mutation store
	 * @param state
	 * @param book
	 */
	[MUTATIONS.BOOK_DELETE](state, book) {
		let index = state.books.indexOf(book);
		state.books.splice(index, 1);
	}
};

export default {
	state, getters, actions, mutations
}