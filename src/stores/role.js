import {
    defineStore
} from 'pinia'
import {
    CREATE_ROLE,
    DELETE_ROLE,
    EDIT_ROLE,
    LIST_ROLE,
    UPDATE_ROLE
} from '../utils/url'

export const useRolesStore = defineStore('roles', {
    state: () => {
        return {
            count: 0,
            roles: [],
        }
    },
    actions: {
        async getRole(data) {
            const res = await (await fetch(`${LIST_ROLE}?page=${data.currentPage}`, {
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
        async createRole(data) {
            const res = await (await fetch(`${CREATE_ROLE}`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async editRole($id) {
            const res = await (await fetch(`${EDIT_ROLE}/${$id}`, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                },
            })).json();
            return res;
        },
        async updateRole(data) {
            const id=data.id;
            const newData={
                'name':data.name,
            }
            const res = await (await fetch(`${UPDATE_ROLE}/${id}`, {
                method: 'POST',
                body: JSON.stringify(newData),
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
        async deleteRole($id) {
            const res = await (await fetch(`${DELETE_ROLE}/${$id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            })).json();
            return res;
        },
    },
})
