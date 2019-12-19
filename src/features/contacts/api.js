import api from "@/lib/api";
const BASE_URL = "http://localhost:3000/contacts";

export default {
  findContacts() {
    return api.get(BASE_URL);
  },
  getContact(id) {
    return api.get(`${BASE_URL}/${id}`);
  }
};
