<template>
  <main-layout title="new">
    <contacts-create @saveData="saveData" v-model="contact" />
  </main-layout>
</template>

<script>
import MainLayout from "@/ui/layouts/MainLayout";
import ContactsCreate from "@/features/contacts/Create";

export default {
  components: {
    ContactsCreate,
    MainLayout
  },
  data() {
    return {
      contact: {
        name: "ciao",
        surname: "pippo",
        age: 34
      }
    };
  },
  methods: {
    saveData(data) {
      console.log("dati salvati ", data);
    }
  }
};
</script>
