import Vue from "vue";
import VueI18n from "vue-i18n";

Vue.use(VueI18n);

export default new VueI18n({
  locale: "en",
  messages: {
    en: {
      app: {
        title: "Address Book",
        loading: "Loading...",
        error: "Error!",
        success: "Success!",
        homepage: "Home Page",
        empty: "Nothing here."
      },
      addressBook: {
        list: "List",
        new: "New Contact",
        detail: "Detail",
        save: "Save",
        edit: "Edit",
        fields: {
          name: "Name",
          surname: "Surname",
          phone: "Phone",
          age: "Age"
        }
      }
    }
  }
});
