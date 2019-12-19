import api from "@/features/contacts/api";

export default {
  namespaced: true,
  state: {
    contacts: []
  },
  mutations: {
    SET_CONTACTS(state, value) {
      state.contacts = value;
    }
  },
  actions: {
    async findContacts(context) {
      context.commit("SET_CONTACTS", await api.findContacts());
    }
  },
  getters: {
    getAll(state) {
      return name =>
        state.contacts
          .map(item => ({
            ...item,
            name: item.name.toUpperCase()
          }))
          .filter(item => item.name === name);
    }
  }
};
