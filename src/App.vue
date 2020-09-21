<template>
  <div id="app" class="h-100">
		<router-link :to="{ name: 'home'}">Home</router-link>
		<br>
		<router-link :to="{ name: 'list'}">Books</router-link>
		<transition name="fade" mode="out-in">
			<router-view :key="$route.path"></router-view>
		</transition>
    <v-dialog />
    <BooksFormModal/>
  </div>
</template>

<script>
import BooksFormModal from './components/modals/BooksFormModal';

export default {
  name: 'App',
  components: {BooksFormModal}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
