import Datatable from './view/Datatable.vue'
import Posts from './view/Posts.vue'
import NewPost from './view/NewPost.vue'
import EditPost from './view/EditPost.vue'

let routes = [
  {
    path: '/datatable',
    name: 'Datatable',
    component: Datatable
  },
  {
    path: '/posts',
    name: 'Posts',
    component: Posts
  },
  {
    path: '/posts/new',
    name: 'NewPost',
    component: NewPost
  },
  {
    path: '/posts/:id',
    name: 'EditPost',
    component: EditPost
  }
]

export default routes;