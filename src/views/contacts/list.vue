<template>
  <!-- BE DECLARATIVE, DON'T USE HTML -->
  <main-layout :title="$t('addressBook.list')">
    <contacts-list :contacts="contacts" @navigateTo="navigateTo" />
  </main-layout>
</template>

<script>
import ContactsList from "@/features/contacts/List";
import MainLayout from "@/ui/layouts/MainLayout";
import CommunicationHandler from "@/features/commons/CommunicationHandler";

export default {
  components: {
    ContactsList,
    MainLayout
  },
  mixins: [CommunicationHandler],
  methods: {
    navigateTo(contact) {
      this.$router.push(`/contacts/modify/${contact.id}`);
    }
  },
  computed: {
    // work reactive
    contacts() {
      return this.$store.getters["contacts/getAll"];
    }
  },
  async created() {
    this.execCommunicationAction(
      () => this.$store.dispatch("contacts/findContacts"),
      {
        message: false,
        cb: () => {}
      }
    );
  }
};
</script>
