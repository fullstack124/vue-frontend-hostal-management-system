<script setup>
import Button from "../../../components/Button.vue";
import { ref, onMounted } from "vue";
import { useBranchStore } from "../../../stores/branch";
import { toast } from "vue-sonner";
import { useRouter } from "vue-router";
const store = useBranchStore();
const router = useRouter();
const branch_categories = ref([]);
const branch = ref({
  branch_category_id: "",
  branch: "",
  alias: "",
  email: "",
  phone: "",
  capacity: "",
  currency_code: "",
  currency_symbol: "",
  footer: "",
  address: "",
});

const logo = ref("");

const loadFile = (e) => {
  logo.value = e.target.files[0];
};

const loading = ref(false);

const submitBranch = async (e) => {
  e.preventDefault();

  const formData = new FormData();
  formData.append("branch_category_id", branch.value.branch_category_id);
  formData.append("branch", branch.value.branch);
  formData.append("alias", branch.value.alias);
  formData.append("email", branch.value.email);
  formData.append("phone", branch.value.phone);
  formData.append("capacity", branch.value.capacity);
  formData.append("currency_code", branch.value.currency_code);
  formData.append("currency_symbol", branch.value.currency_symbol);
  formData.append("footer", branch.value.footer);
  formData.append("address", branch.value.address);
  formData.append("logo", logo.value);
  loading.value = true;
  const res = await store.createBranch(formData);
  if (res.success) {
    res.message.forEach((val) => {
      toast.success(val);
    });
    branch.value.branch_category_id = "";
    branch.value.branch = "";
    branch.value.alias = "";
    branch.value.email = "";
    branch.value.phone = "";
    branch.value.capacity = "";
    branch.value.currency_code = "";
    branch.value.currency_symbol = "";
    branch.value.footer = "";
    branch.value.address = "";
    router.back();
  } else {
    res.message.forEach((val) => {
      toast.error(val);
    });
  }
  loading.value = false;
};

onMounted(async () => {
  const res = await store.getBranchCategory();
  console.log(res);
  if (res.success) {
    branch_categories.value = res.branch_categories;
  } else {
    res.message.forEach((val) => {
      toast.error(val);
    });
  }
});
</script>
<template>
  <div class="container mx-auto h-screen">
    <div class="shadow-md m-5 rounded-md">
      <div class="py-3 bg-[#23292F] flex items-center justify-between px-3 rounded-t-md">
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <router-link to="/role/list" class="ml-3 text-md"> Branch </router-link>
        </div>
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <span class="ml-3 text-md">
            Dashboard /
            <router-link to="/role/list"> Branch </router-link> /
            <router-link to="/role/create" class="text-green-600">
              Add Branch
            </router-link>
          </span>
        </div>
      </div>
      <form action @submit="submitBranch">
        <div class="p-5 bg-white">
          <div
            class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3"
          >
            <div>
              <label for class="text-md font-medium">Select Branch</label>
              <select
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="branch_category_id"
                v-model="branch.branch_category_id"
              >
                <option value="">Please Select Category</option>
                <option
                  v-for="(category, index) in branch_categories"
                  :key="index"
                  :value="category.id"
                >
                  {{ category.category }}
                </option>
              </select>
            </div>
            <div>
              <label for class="text-md font-medium">Branch</label>
              <input
                type="text"
                v-model="branch.branch"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="branch"
                placeholder="Enter Branch"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Alias</label>
              <input
                type="text"
                v-model="branch.alias"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="alias"
                placeholder="Enter Alias"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Email</label>
              <input
                type="text"
                v-model="branch.email"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="email"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Phone</label>
              <input
                type="text"
                v-model="branch.phone"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="phone"
                placeholder="Enter Phone"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Address</label>
              <input
                type="text"
                v-model="branch.address"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="address"
                placeholder="Enter Address"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Capacity</label>
              <input
                type="text"
                v-model="branch.capacity"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="joining_date"
                placeholder="Enter Capacity"
              />
            </div>

            <div class="">
              <label class="text-md font-medium">Upload file</label>
              <input
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                id="file_input"
                @change="loadFile"
                type="file"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Currency Code</label>
              <input
                type="text"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="currency_code"
                v-model="branch.currency_code"
                placeholder="Currency Code"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Currency Symbol</label>
              <input
                type="text"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="currency_symbol"
                v-model="branch.currency_symbol"
                placeholder="Currency Symbol"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Footer</label>
              <input
                type="text"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="currency_footer"
                v-model="branch.footer"
                placeholder="Footer"
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
            <Button :type="'submit'" :label="'Add Branch '" />
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
