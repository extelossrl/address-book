<template>
  <!-- THE FIRST DIV WITH ID app IS A GOOD CONVENTION FOR SSR, LET HIM SURVIVE -->
  <div id="app">
    <!-- BE DECLARATIVE, DON'T USE HTML -->
    <app-layout>
      <template v-slot:header>
        <main-navbar :items="navbarItems" />
      </template>
      <router-view />
    </app-layout>
  </div>
</template>

<script>
import AppLayout from "@/ui/layouts/AppLayout";
import MainNavbar from "@/ui/lists/MainNavbar";

export default {
  components: {
    AppLayout,
    MainNavbar
  },
  data() {
    return {
      // if you need some data only locally, put them in the data without using the store
      navbarItems: [
        {
          to: "/contacts/new",
          label: this.$t("addressBook.new")
        }
      ]
    };
  }
};
</script>
