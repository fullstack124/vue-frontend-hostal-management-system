import {
    defineStore
} from 'pinia'
import {
    CREATE_BRANCH_CATEGORY,
    DELETE_BRANCH_CATEGORY,
    EDIT_BRANCH_CATEGORY,
    LIST_BRANCH_CATEGORY,
    UPDATE_BRANCH_CATEGORY
} from '../utils/url'

export const useBranchCategoryStore = defineStore('branch_category', {
    state: () => {
        return {
            count: 0,
            roles: [],
        }
    },
    actions: {
        async getBranch(data) {
            const res = await (await fetch(`${LIST_BRANCH_CATEGORY}?page=${data.currentPage}`, {
                method: 'POST',
                body: JSON.stringify({
                    'search': data.search
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async createBranchCategory(data) {
            const res = await (await fetch(`${CREATE_BRANCH_CATEGORY}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async editBranchCategory($id) {
            const res = await (await fetch(`${EDIT_BRANCH_CATEGORY}/${$id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();
            return res;
        },
        async updateBranchCategory(data) {
            const id=data.id;
            const newData={
                'category':data.category,
                'note':data.note,
            }
            const res = await (await fetch(`${UPDATE_BRANCH_CATEGORY}/${id}`, {
                method: 'POST',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async deleteBranchCategory(id) {
            const res = await (await fetch(`${DELETE_BRANCH_CATEGORY}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
    },
})
