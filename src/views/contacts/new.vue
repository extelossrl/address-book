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
    /**
     * @param data attributi del contatto al click del pulsante di salvataggio
     * @example {
     *  name: "ciao",
     *  surname: "pippo",
     *  age: 34
     * }
     */
    async saveData(data) {
      try {
        await this.$store.dispatch("contacts/saveContact", data);
      } catch (error) {
        console.error({ error });
      }
    }
  }
};
</script>
