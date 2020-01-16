<template>
  <!-- BE DECLARATIVE, DON'T USE HTML -->
  <main-layout :title="$t('addressBook.new')">
    <contacts-create @saveData="saveData" v-model="contact" />
  </main-layout>
</template>

<script>
import MainLayout from "@/ui/layouts/MainLayout";
import ContactsCreate from "@/features/contacts/Create";

import CommunicationHandler from "@/features/commons/CommunicationHandler";

export default {
  components: {
    ContactsCreate,
    MainLayout
  },
  mixins: [CommunicationHandler],
  data() {
    return {
      contact: {
        name: "hello",
        surname: "world",
        phone: "123456789",
        age: 34
      }
    };
  },
  methods: {
    // Use JSDoc also for type description (remeber @type, @typedoc, @param, @returns, @example)
    /**
     * Save a contact (components -> view -> store; ...; store -> view -> components)
     * @param {Object} data Contact DTO
     * @param {string} data.name Name of the contact
     * @param {string} data.surname Surname of the contact
     * @param {number} data.phone Phone number of the contact
     * @param {number} data.age Age of the contact
     * @example {
     *  name: "hello",
     *  surname: "world",
     *  phone: "123456789",
     *  age: 34
     * }
     */
    async saveData(data) {
      this.execCommunicationAction(
        () => this.$store.dispatch("contacts/saveContact", data),
        {
          message: this.$t("app.success"),
          cb: () => this.$router.push("/")
        }
      );
    }
  }
};
</script>
