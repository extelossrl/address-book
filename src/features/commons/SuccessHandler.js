export default {
  methods: {
    setSuccess(actionSet) {
      if (actionSet) {
        this.$buefy.snackbar.open(actionSet);
      }
    }
  }
};
