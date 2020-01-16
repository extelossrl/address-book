export default {
  data() {
    return {
      error: null
    };
  },
  methods: {
    setError(actionSet) {
      if (actionSet) {
        console.error(actionSet);
        this.error = this.$buefy.snackbar.open({
          duration: 5000,
          message: this.$t("app.error"),
          type: "is-danger"
        });
      }
    }
  }
};
