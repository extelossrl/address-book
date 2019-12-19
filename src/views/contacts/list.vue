<template>
  <main-layout title="list">
    <div v-if="loading">loading...</div>
    <div v-else-if="error">Errore nel recupero dei dati</div>
    <contacts-list v-else :contacts="contacts" />

    <contacts-create @saveData="saveData" v-model="contact" />
  </main-layout>
</template>

<script>
import ContactsList from "@/features/contacts/List";
import ContactsCreate from "@/features/contacts/Create";
import MainLayout from "@/ui/layouts/MainLayout";

export default {
  components: {
    ContactsList,
    ContactsCreate,
    MainLayout
  },
  data() {
    return {
      error: false,
      loading: false,
      contact: {
        name: "ciao",
        surname: "pippo",
        age: 34
      }
    };
  },
  methods: {
    setLoading(value) {
      this.loading = value;
    },
    setError(value) {
      this.error = value;
    },
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
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/getAll"];
    }
  },
  async created() {
    this.setLoading(true);
    try {
      await this.$store.dispatch("contacts/findContacts");
      this.setError(false);
    } catch (error) {
      this.setError(true);
    }
    this.setLoading(false);
  }
};
</script>
