<template>
  <main-table
    :data="contacts"
    :columns="columns"
    :loading="loading"
    @click="$emit('navigateTo', $event)"
  />
</template>

<script>
import MainTable from "@/ui/lists/MainTable";

export default {
  components: {
    MainTable
  },
  data() {
    return {
      columns: [
        {
          field: "name",
          label: this.$t("addressBook.fields.name"),
          searchable: true,
          sortable: true
        },
        {
          field: "surname",
          label: this.$t("addressBook.fields.surname"),
          searchable: true,
          sortable: true
        },
        {
          field: "phone",
          label: this.$t("addressBook.fields.phone"),
          searchable: true,
          sortable: true
        }
      ]
    };
  },
  props: {
    loading: {
      type: Boolean
    },
    contacts: {
      // Use JSDoc when your code isn't enough explicit
      /**
       * @example [{
          name: "Gorrini",
          phone: "33213213"
        }]
      */
      type: Array
    }
  }
};
</script>
