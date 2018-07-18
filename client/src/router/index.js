import Vue from 'vue'
import Router from 'vue-router'

let all_routes = [];
// Home routes
import {default as HomeRoutes} from '../components/home/routes'
all_routes = all_routes.concat(HomeRoutes);

// Posts routes
import {default as PostsRoutes} from '../components/posts/routes'
all_routes = all_routes.concat(PostsRoutes);

Vue.use(Router)
export default new Router({
  mode: 'history',
  routes: all_routes
})
