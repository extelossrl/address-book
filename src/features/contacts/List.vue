<template>
  <main-list>
    <main-list-item
      v-for="(contact, index) in contacts"
      :key="index"
      :primaryText="contact.name"
      :secondaryText="contact.phone"
    />
  </main-list>
</template>

<script>
import MainListItem from "@/ui/lists/MainListItem";
import MainList from "@/ui/lists/MainList";

export default {
  components: {
    MainListItem,
    MainList
  },
  props: {
    contacts: {
      /** 
       * @example {
          name: "Gorrini",
          phone: "33213213"
        }
      */
      type: Array
    }
  }
};
</script>
