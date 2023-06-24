import {
    defineStore
} from 'pinia'
import {
    CREATE_FOOD_CATEGORY_SUB_CATEGORY,
    CREATE_FOOD_SUB_CATEGORY,
    DELETE_FOOD_SUB_CATEGORY,
    EDIT_FOOD_SUB_CATEGORY,
    LIST_FOOD_SUB_CATEGORY,
    UPDATE_FOOD_SUB_CATEGORY
} from '../utils/url'
import NetworkApiResponse from '../network/network_api_service';
import apiHeader from '../network/api_header';
import {
    DELETE,
    GET,
    POST,
    unAuthHeader
} from '../network/methods';
import apiUrl from '../network/api_urls';
export const useFoodSubCategoryStore = defineStore('food_sub_category', {
    state: () => {
        return {
            count: 0,
        }
    },
    actions: {
        async getFoodSubCategory(data) {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(`${LIST_FOOD_SUB_CATEGORY}?page=${data.currentPage}`), apiHeader(GET, null, unAuthHeader));

        },
        async getFoodCategory() {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(CREATE_FOOD_CATEGORY_SUB_CATEGORY), apiHeader(GET, null, unAuthHeader));

        },
        async createFoodSubCategory(data) {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(CREATE_FOOD_SUB_CATEGORY, 0), apiHeader(POST, data, unAuthHeader));
        },
        async editFoodSubCategory(id) {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(EDIT_FOOD_SUB_CATEGORY, id), apiHeader(GET, null, unAuthHeader));
        },
        async updateFoodSubCategory(data) {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(UPDATE_FOOD_SUB_CATEGORY, 0), apiHeader(POST, data, unAuthHeader));
        },
        async deleteFoodSubCategory(id) {
            return await NetworkApiResponse.getPostApiResponse(apiUrl(DELETE_FOOD_SUB_CATEGORY, id), apiHeader(DELETE, null, unAuthHeader));
        },
    },
})
