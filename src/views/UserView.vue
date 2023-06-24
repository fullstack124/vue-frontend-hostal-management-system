<script setup>
import Input from "../components/Input.vue";
import SelectDropdown from "../components/SelectDropdown.vue";
import Button from "../components/Button.vue";
import { ref, watch } from "vue";

const users = ref({
  username: "",
  email: "",
  password: "",
  name: "",
  phone: "",
  gender: "",
  religion: "",
  address: "",
  joining_date: "",
  date_of_birth: ""
});

const options = ref([
  {
    name: "Male"
  },
  {
    name: "Female"
  }
]);
</script>
<template>
  <div class="container mx-auto h-screen">
    <div class="shadow-md m-5 rounded-md">
      <div class="py-3 bg-[#23292F] flex items-center justify-between px-3 rounded-t-md">
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <span class="ml-3 text-md">Users</span>
        </div>
        <div class="text-white">
          <i class="fa-solid fa-users text-md"></i>
          <span class="ml-3 text-md">
            Dashboard /
            <router-link to>User</router-link>/
            <span class="text-green-600">Add User</span>
          </span>
        </div>
      </div>
      <form action>
        <div class="p-5 bg-white">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3">
            <div>
              <label for class="text-md font-medium">Name</label>
              <input
                type="text"
                v-model="users.name"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="name"
                placeholder="Enter Name"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Date of Birth</label>
              <input
                type="date"
                v-model="users.date_of_birth"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="date_of_birth"
                placeholder="Enter Date of Birth"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Gender</label>
              <select class="w-full my-1 py-2 px-2 rounded-md outline-none border" name="gender">
                <option
                  v-for="(option, index) in options"
                  :key="index"
                  :value="option.name"
                >{{option.name}}</option>
              </select>
            </div>
            <div>
              <label for class="text-md font-medium">Religion</label>
              <input
                type="text"
                v-model="users.religion"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="religion"
                placeholder="Enter Religion"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Email</label>
              <input
                type="text"
                v-model="users.email"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="email"
                placeholder="Enter Email"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Phone</label>
              <input
                type="text"
                v-model="users.phone"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="phone"
                placeholder="Enter Phone"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Address</label>
              <input
                type="text"
                v-model="users.address"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="address"
                placeholder="Enter Address"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Joining Date</label>
              <input
                type="date"
                v-model="users.joining_date"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="joining_date"
                placeholder="Enter Joining Date"
              />
            </div>

            <div>
              <label for class="text-md font-medium">Photo</label>
              <input
                type="file"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="photo"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Username</label>
              <input
                type="text"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="username"
                v-model="users.username"
              />
            </div>
            <div>
              <label for class="text-md font-medium">Password</label>
              <input
                type="text"
                class="w-full my-1 py-2 px-2 rounded-md outline-none border"
                name="password"
                v-model="users.password"
              />
            </div>
          </div>
          <Button :type="'submit'" :label="'Add User'" />
        </div>
      </form>
    </div>
  </div>
</template>