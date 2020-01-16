import api from "@/lib/api";
const BASE_URL = "http://localhost:3000/contacts";

export default {
  findContacts() {
    return api.get(BASE_URL);
  },
  getContact(id) {
    return api.get(`${BASE_URL}/${id}`);
  },
  saveContact(contact) {
    return api.post(BASE_URL, contact);
  },
  updateContact(contact) {
    return api.patch(`${BASE_URL}/${contact.id}`, {
      ...contact,
      id: undefined
    });
  }
};
