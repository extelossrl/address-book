import Vue from "vue";
import Vuex from "vuex";

import contacts from "@/features/contacts/store";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    contacts
  }
});
