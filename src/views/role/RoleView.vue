<script setup>
import Button from "../../components/Button.vue";
import { ref, onMounted } from "vue";
import { useRolesStore } from "../../stores/role";
import { toast } from "vue-sonner";
const store = useRolesStore();

const loading = ref(false);
const search = ref("");
const roles = ref([]);
const currentPage = ref(1);
const perPage = ref(1);
const total = ref(1);

const fetchData = async () => {
  loading.value = true;
  const data = {
    currentPage: currentPage.value,
    search: search.value,
  };
  const res = await store.getRole(data);
  if (res.success) {
    roles.value = res.roles.data;
    currentPage.value = res.roles.current_page;
    perPage.value = res.roles.per_page;
    total.value = res.roles.total;
  } else {
    res.message.forEach((val) => {
      toast.error(val);
    });
  }
  loading.value = false;
};
const onClickHandler = (page) => {
  currentPage.value = page;
  fetchData();
};

const changePage = (e) => {
  total.value = e.target.value;
  fetchData();
};
const searchData = (e) => {
  search.value = e.target.value;
  fetchData();
};

const roleDelete = async ($id) => {
  const res = await store.deleteRole($id);
  if (res.success) {
    res.message.forEach((val) => {
      toast.success(val);
    });
    fetchData();
  } else {
    res.message.forEach((val) => {
      toast.error(val);
    });
  }
};
onMounted(async () => {
  fetchData();
});
</script>
<template>
  <div class="container mx-auto h-screen">
    <div class="shadow-md m-5 rounded-md">
      <div class="py-3 bg-[#23292F] flex items-center justify-between px-3 rounded-t-md">
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <router-link to="/role/list" class="ml-3 text-md"> Role</router-link>
        </div>
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <span class="ml-3 text-md">
            Dashboard /
            <router-link to="/role/list"> Role</router-link> / 
            <router-link to="/role/create" class="text-green-600"> Add Role</router-link>
          </span>
        </div>
      </div>
      <div class="p-5 bg-white">
        <div class="container mx-auto">
          <div class="flex justify-center" v-if="loading">
            <div role="status">
              <svg
                aria-hidden="true"
                class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
          <div
            v-else
            class="overflow-x-scroll md:overflow-hidden flex items-center justify-center font-sans"
          >
            <div class="w-full">
              <div class="bg-white shadow-md rounded my-6">
                <div class="mb-2 flex justify-between items-center">
                  <div class="flex items-center">
                    <span>Show</span>
                    <select
                      @change="changePage"
                      class="bg-gray-50 border mx-3 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-1.5"
                    >
                      <option value="10">10</option>
                      <option value="25">25</option>
                      <option value="50">50</option>
                      <option value="100">100</option>
                    </select>
                    <span>entries</span>
                  </div>
                  <input
                    type="search"
                    @change="searchData"
                    class="px-4 border py-1 text-gray-800 rounded-md focus:outline-none"
                    placeholder="search"
                  />
                </div>
                <table class="min-w-max w-full table-auto">
                  <thead>
                    <tr
                      class="bg-gray-200 text-gray-600 uppercase text-sm leading-normal"
                    >
                      <th class="py-3 px-6 text-left">ID</th>
                      <th class="py-3 px-6 text-left">Role Name</th>
                      <th class="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  <tbody class="text-gray-600 text-sm font-light">
                    <tr
                      class="border-b border-gray-200 hover:bg-gray-100"
                      v-for="role in roles"
                      :key="role.id"
                    >
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <span>{{ role.id }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-left">
                        <div class="flex items-center">
                          <span>{{ role.name }}</span>
                        </div>
                      </td>
                      <td class="py-3 px-6 text-center">
                        <div class="flex item-center justify-center">
                          <!-- <div class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                                        </svg>
                                    </div> -->
                          <router-link
                            :to="'/role/update/' + role.id"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                              />
                            </svg>
                          </router-link>
                          <div
                            @click="() => roleDelete(role.id)"
                            class="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                              />
                            </svg>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div class="flex justify-center">
                <vue-awesome-paginate
                  :total-items="total"
                  :items-per-page="perPage"
                  :max-pages-shown="perPage"
                  v-model="currentPage"
                  :on-click="onClickHandler"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.pagination-container {
  display: flex;
  column-gap: 10px;
}

.paginate-buttons {
  padding: 2px 10px !important;
  border-radius: 21px !important;

  text-align: center !important;
  box-shadow: 0px 0px 7px 0px #a798989e !important;
}

.paginate-buttons:hover {
  background-color: #d8d8d8;
}

.active-page {
  background-color: #1919db !important;
  color: white !important;
}

.active-page:hover {
  background-color: #2988c8;
}
</style>
