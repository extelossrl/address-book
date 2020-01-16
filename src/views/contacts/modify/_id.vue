<template>
  <!-- BE DECLARATIVE, DON'T USE HTML -->
  <main-layout :title="$t('addressBook.detail')">
    <contact-detail
      @updateContact="updateData"
      :successful="successful"
      :value="contact"
    />
  </main-layout>
</template>

<script>
import MainLayout from "@/ui/layouts/MainLayout";
import ContactDetail from "@/features/contacts/Detail";

import CommunicationHandler from "@/features/commons/CommunicationHandler";

export default {
  components: {
    ContactDetail,
    MainLayout
  },
  mixins: [CommunicationHandler],
  data() {
    return {
      successful: false
    };
  },
  computed: {
    contact() {
      return this.$store.state.contacts.currentContact;
    }
  },
  methods: {
    async updateData(contact) {
      this.successful = false;
      this.execCommunicationAction(
        () => this.$store.dispatch("contacts/updateContact", contact),
        {
          message: this.$t("app.success"),
          cb: () => {
            this.successful = true;
          }
        }
      );
    }
  },
  created() {
    this.execCommunicationAction(
      () => this.$store.dispatch("contacts/getContact", this.$route.params.id),
      {
        message: false,
        cb: () => {}
      }
    );
  }
};
</script>
