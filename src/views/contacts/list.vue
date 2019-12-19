<template>
  <main-layout title="list">
    <div v-if="loading">loading...</div>
    <contacts-list v-else :contacts="contacts" />
  </main-layout>
</template>

<script>
import ContactsList from "@/features/contacts/List";
import MainLayout from "@/ui/layouts/MainLayout";

export default {
  components: {
    ContactsList,
    MainLayout
  },
  data() {
    return {
      loading: false
    };
  },
  methods: {
    setLoading(value) {
      this.loading = value;
    }
  },
  computed: {
    contacts() {
      return this.$store.getters["contacts/getAll"]("ANDREA");
    }
  },
  async created() {
    this.setLoading(true);
    await this.$store.dispatch("contacts/findContacts");
    this.setLoading(false);
  }
};
</script>
