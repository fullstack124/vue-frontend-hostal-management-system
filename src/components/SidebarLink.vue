    <script setup>
import { ref } from "vue";

const dropdown = ref(false);
const links = ref([
  {
    open: false,
    name: "Dashboard",
    link: "/",
    icon: "<i class='fa-solid fa-gauge'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "User",
    link: "/about",
    icon: "<i class='fa-solid fa-users'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "Member",
    link: "/about",
    icon: "<i class='fa-solid fa-user'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "Bed Manager",
    link: "/about",
    icon: "<i class='fa-solid fa-bed'></i>",
    sub_menu: [
      {
        name: "Bed Assign",
        link: "/",
        icon: "<i class='fa-solid fa-bed-pulse'></i>"
      },
      {
        name: "Bed ",
        link: "/",
        icon: "<i class='fa-solid fa-bed'></i>"
      },
      {
        name: "Room",
        link: "/",
        icon: '<i class="fa-solid fa-hospital"></i>'
      },
      {
        name: "Category",
        link: "/",
        icon: '<i class="fa-solid fa-certificate"></i>'
      }
    ]
  },
  {
    open: false,
    name: "Food Meal",
    link: "/about",
    icon: "<i class='fa-solid fa-bed'></i>",
    sub_menu: [
      {
        name: "Order",
        link: "/",
        icon: "<i class='fa-solid fa-bed-pulse'></i>"
      },
      {
        name: "Pos",
        link: "/",
        icon: "<i class='fa-solid fa-bed'></i>"
      },
      {
        name: "Food Item",
        link: "/",
        icon: '<i class="fa-solid fa-hospital"></i>'
      },
      {
        name: "Food Sub Category",
        link: "/",
        icon: '<i class="fa-solid fa-certificate"></i>'
      },
      {
        name: "Food Category",
        link: "/",
        icon: '<i class="fa-solid fa-certificate"></i>'
      }
    ]
  },
  {
    open: false,
    name: "Bill",
    link: "/about",
    icon: "<i class='fa-solid fa-bed'></i>",
    sub_menu: [
      {
        name: "Bill Payment",
        link: "/",
        icon: "<i class='fa-solid fa-bed-pulse'></i>"
      },
      {
        name: "Bill",
        link: "/",
        icon: "<i class='fa-solid fa-bed'></i>"
      },
    ]
  },
  {
    open: false,
    name: "Visitor Info",
    link: "/",
    icon: "<i class='fa-solid fa-gauge'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "Notice",
    link: "/",
    icon: "<i class='fa-solid fa-gauge'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "Account Ledger Report",
    link: "/",
    icon: "<i class='fa-solid fa-gauge'></i>",
    sub_menu: null
  },
  {
    open: false,
    name: "Administrator",
    link: "/about",
    icon: "<i class='fa-solid fa-bed'></i>",
    sub_menu: [
      {
        name: "Update",
        link: "/",
        icon: "<i class='fa-solid fa-bed-pulse'></i>"
      },
      {
        name: "Permission",
        link: "/",
        icon: "<i class='fa-solid fa-bed'></i>"
      },
      {
        name: "Role",
        link: "/role/list",
        icon: "<i class='fa-solid fa-user-gear'></i>"
      },
      {
        name: "Branch Category",
        link: "/branch/category/list",
        icon: "<i class='fa-solid fa-code-branch'></i>"
      },
      {
        name: "Branch",
        link: "/branch/list",
        icon: "<i class='fa-solid fa-hat-cowboy'></i>"
      },
    ],
  },
  {
    open: false,
    name: "Settings",
    link: "/about",
    icon: "<i class='fa-solid fa-bed'></i>",
    sub_menu: [
      {
        name: "General Setting",
        link: "/",
        icon: "<i class='fa-solid fa-bed-pulse'></i>"
      },
      {
        name: "Email Setting",
        link: "/",
        icon: "<i class='fa-solid fa-bed'></i>"
      },
    ]   
  }
]);

const showDropdown = id => {
  dropdown.value = !dropdown.value;
};
</script>

<template>
  <ul>
    <li v-for="(link) in links" :key="link.id" class="hover:bg-[#232A2F] cursor-pointer text-sm">
      <router-link
        :to="link.sub_menu == null ? link.link : ''"
        class="text-white/70 flex items-center px-3 py-3"
        active-class="active"
        v-if="link.sub_menu == null"
      >
        <span v-html="link.icon"></span>
        <span class="text-sm ml-4">{{ link.name }}</span>
      </router-link>
      <div
        v-else
        class="text-white/70 flex items-center justify-between px-3 py-3"
        active-class="active"
        :class="{ 'bg-[#232A2F]': link.open }"
        @click=" link.open = !link.open"
      >
        <div>
          <span v-html="link.icon"></span>
          <span class="text-sm ml-4">{{ link.name }}</span>
        </div>
        <i class="fa-solid fa-angle-left" v-if="!link.open"></i>
        <i class="fa-solid fa-angle-down" v-else></i>
      </div>
      <ul
        v-if="link.sub_menu != null"
        :class="{ 'block bg-[#232A2F]':  link.open , hidden: !link.open  }"
      >
        <li
          v-for="(sub_menu) in link.sub_menu"
          :key="sub_menu.name"
          class="py-3 px-3 hover:bg-[#232A2F] cursor-pointer text-sm"
        >
          <router-link
            :to="sub_menu.link"
            class="text-white/50 flex items-center px-3"
            active-class="active"
          >
            <span v-html="sub_menu.icon"></span>
            <span class="text-sm ml-4">{{ sub_menu.name }}</span>
          </router-link>
        </li>
      </ul>
    </li>
  </ul>
</template>