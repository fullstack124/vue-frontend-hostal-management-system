import {
    createRouter,
    createWebHistory
} from 'vue-router'
import HomeView from '../views/HomeView.vue'
import UserView from '../views/UserView.vue'
import CreateRoleView from '../views/role/CreateRoleView.vue'
import RoleView from '../views/role/RoleView.vue'
import UpdateRoleView from '../views/role/UpdateRoleView.vue'
import CreateBranchCategoryView from '../views/branch/branch_category/CreateBranchCategoryView.vue'
import BranchCategoryView from '../views/branch/branch_category/BranchCategoryView.vue'
import UpdateBranchCategoryView from '../views/branch/branch_category/UpdateBranchCategoryView.vue'
import CreateBranchView from '../views/branch/branch/CreateBranchView.vue'
import BranchView from '../views/branch/branch/BranchView.vue'
import UpdateBranchView from '../views/branch/branch/UpdateBranchView.vue'
import CreateFoodCategoryView from '../views/food/food-category/CreateFoodCategoryView.vue'
import FoodCategoryView from '../views/food/food-category/FoodCategoryView.vue'
import UpdateFoodCategoryView from '../views/food/food-category/UpdateFoodCategoryView.vue'
import CreateFoodSubCategoryView from '../views/food/food-sub-category/CreateFoodSubCategoryView.vue'
import FoodSubCategoryView from '../views/food/food-sub-category/FoodSubCategoryView.vue'
import UpdateFoodSubCategoryView from '../views/food/food-sub-category/UpdateFoodSubCategoryView.vue'


const router = createRouter({
    history: createWebHistory(
        import.meta.env.BASE_URL),
    routes: [{
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/users/add',
            name: 'Add User',
            component: UserView
        },
        {
            path: '/role/',
            children: [{
                    path: 'list',
                    name: 'list-role',
                    component: RoleView,
                },
                {
                    path: 'create',
                    name: 'create-role',
                    component: CreateRoleView,
                },
                {
                    path: 'update/:id',
                    name: 'update-role',
                    component: UpdateRoleView,
                },
            ],
        },
        {
            path: '/branch/category/',
            children: [{
                    path: 'list',
                    name: 'list-branch-category',
                    component: BranchCategoryView,
                },
                {
                    path: 'create',
                    name: 'create-branch-category',
                    component: CreateBranchCategoryView,
                },
                {
                    path: 'update/:id',
                    name: 'update-branch-category',
                    component: UpdateBranchCategoryView,
                },
            ],
        },
        {
            path: '/branch/',
            children: [
                {
                    path: 'list',
                    name: 'list-branch',
                    component: BranchView,
                },
                {
                    path: 'create',
                    name: 'create-branch',
                    component: CreateBranchView,
                },
                {
                    path: 'update/:id',
                    name: 'update-branch',
                    component: UpdateBranchView,
                },
            ],
        },
        {
            path: '/food/category/',
            children: [
                {
                    path: 'list',
                    name: 'list-food-category',
                    component: FoodCategoryView,
                },
                {
                    path: 'create',
                    name: 'create-food-category',
                    component: CreateFoodCategoryView,
                },
                {
                    path: 'update/:id',
                    name: 'update-food-category',
                    component: UpdateFoodCategoryView,
                },
            ],
        },
        {
            path: '/food/sub/category/',
            children: [
                {
                    path: 'list',
                    name: 'list-food-sub-category',
                    component: FoodSubCategoryView,
                },
                {
                    path: 'create',
                    name: 'create-food-sub-category',
                    component: CreateFoodSubCategoryView,
                },
                {
                    path: 'update/:id',
                    name: 'update-food-sub-category',
                    component: UpdateFoodSubCategoryView,
                },
            ],
        },
        {
            path: '/about',
            name: 'about',
            // route level code-splitting
            // this generates a separate chunk (About.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () => import('../views/AboutView.vue')
        }
    ]
})

export default router
