<script setup>
import Button from "../../components/Button.vue";
import { ref, watch } from "vue";
import { useRolesStore } from "../../stores/role";
import { toast } from "vue-sonner";
import { useRouter } from "vue-router";
const store = useRolesStore();
const router = useRouter();
const roles = ref({
  name: "",
});

const loading = ref(false);

const submitRole = async (e) => {
  e.preventDefault();

  const data = {
    name: roles.value.name,
  };
  loading.value = true;
  const res = await store.createRole(data);
  if (res.success) {
    res.message.forEach((val) => {
      toast.success(val);
    });
    roles.value.name = "";
    router.back();

  } else {
    res.message.forEach((val) => {
      toast.error(val);
    });
  }
  loading.value = false;
};
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
      <form action @submit="submitRole">
        <div class="p-5 bg-white">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3"
          >
            <div>
              <label for class="text-md font-medium">Name</label>
              <input
                type="text"
                v-model="roles.name"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="name"
                placeholder="Enter Name"
              />
            </div>
          </div>
          <div v-if="loading">
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
          <div v-else>
            <Button :type="'submit'" :label="'Add Role'" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
