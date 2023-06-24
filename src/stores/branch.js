import {
    defineStore
} from 'pinia'
import {
    CREATE_BRANCH,
    DELETE_BRANCH,
    EDIT_BRANCH,
    LIST_BRANCH,
    LIST_BRANCH_CATEGORY_BRANCH,
    UPDATE_BRANCH
} from '../utils/url'

export const useBranchStore = defineStore('branch', {
    state: () => {
        return {
            count: 0,
            branches: [],
        }
    },
    actions: {
        async getBranch(data) {
            const res = await (await fetch(`${LIST_BRANCH}?page=${data.currentPage}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async getBranchCategory() {
            const res = await (await fetch(`${LIST_BRANCH_CATEGORY_BRANCH}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async createBranch(formData) {
            const res = await (await fetch(`${CREATE_BRANCH}`, {
                method: 'POST',
                body: formData,
            })).json();
            return res;
        },
        async editBranch(id) {
            const res = await (await fetch(`${EDIT_BRANCH}/${id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async updateBranch(formData) {
            const res = await (await fetch(`${UPDATE_BRANCH}`, {
                method: 'POST',
                body: formData,
            })).json();
            return res;
        },
        async deleteBranch(id) {
            const res = await (await fetch(`${DELETE_BRANCH}/${id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        }
    }

});
