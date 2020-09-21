import VueRouter from "vue-router";
import Home from "@/views/Home";
import List from "@/views/List";
import NotFound from "@/components/NotFound";

const routes = [
	{
		path: "*",
		name: '404',
		component: NotFound
	},
	{
		path: "/",
		name: 'home',
		component: Home
	},
	{
		path: "/list",
		name: 'list',
		component: List
	}
]

const router = new VueRouter({
	routes,
	mode: "history"
})

export default router;