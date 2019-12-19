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
    },
    async saveContact(context, contact) {
      context.dispatch("updateContacts", contact);
      await api.saveContact(contact);

      context.dispatch("findContacts");
    },
    async updateContact(context, contact) {
      context.commit("SET_CONTACTS", await api.updateContact(contact));
    },
    async updateContacts(context, contact) {
      context.commit("SET_CONTACTS", [
        ...context.state.contacts,
        {
          ...contact,
          name: "v-" + contact.name
        }
      ]);
    }
  },
  getters: {
    getAll(state) {
      return state.contacts.map(item => ({
        ...item,
        name: item.name.toUpperCase()
      }));
    }
  }
};
