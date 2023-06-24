import {
    defineStore
} from 'pinia'
import {
    CREATE_FOOD_CATEGORY,
    DELETE_FOOD_CATEGORY,
    EDIT_FOOD_CATEGORY,
    LIST_FOOD_CATEGORY,
    UPDATE_FOOD_CATEGORY
} from '../utils/url'

export const useFoodCategoryStore = defineStore('food_category', {
    state: () => {
        return {
            count: 0,
            roles: [],
        }
    },
    actions: {
        async getFood(data) {
            const res = await (await fetch(`${LIST_FOOD_CATEGORY}?page=${data.currentPage}`, {
                method: 'GET', 
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async createFoodCategory(data) {
            const res = await (await fetch(`${CREATE_FOOD_CATEGORY}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async editFoodCategory($id) {
            const res = await (await fetch(`${EDIT_FOOD_CATEGORY}/${$id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();
            return res;
        },
        async updateFoodCategory(data) {
            const res = await (await fetch(`${UPDATE_FOOD_CATEGORY}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async deleteFoodCategory(id) {
            const res = await (await fetch(`${DELETE_FOOD_CATEGORY}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
    },
})
