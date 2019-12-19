<template>
  <main-layout title="detail">
    <contact-detail @updateContact="updateData" :successful="successful"/>
  </main-layout>
</template>

<script>
import MainLayout from "@/ui/layouts/MainLayout";
import ContactDetail from "@/features/contacts/Detail";
export default {
  components: {
    ContactDetail,
    MainLayout
  },
  data() {
    return {
      successful: false
    }
  },
  methods: {
    async updateData(contact) {
      this.successful = false;
      await this.$store.dispatch("contacts/updateContact", contact);
      await this.$nextTick();
      this.successful = true;
    }
  }
};
</script>
