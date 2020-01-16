export default {
  data() {
    return {
      loading: null
    };
  },
  methods: {
    setLoading(actionOpen) {
      if (actionOpen) {
        this.loading = this.$buefy.loading.open();
      } else {
        this.loading.close();
      }
    }
  }
};
