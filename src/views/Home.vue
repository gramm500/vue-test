<template>
	<BooksForm @createBook="$router.push({name: 'list'})"/>
</template>

<script>
import BooksForm from "@/components/BooksForm";
export default {
	name: "Home",
	components: {BooksForm},
}
</script>