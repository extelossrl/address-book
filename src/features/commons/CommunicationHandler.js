import ErrorHandler from "./ErrorHandler";
import LoadingHandler from "./LoadingHandler";
import SuccessHandler from "./SuccessHandler";

export default {
  mixins: [ErrorHandler, LoadingHandler, SuccessHandler],
  methods: {
    // Let's create a function to handle easier all communications for the user about the state of the request
    async execCommunicationAction(
      action = () => {},
      success = {
        message: this.$t("app.success"),
        cb: () => {}
      },
      error = {
        message: this.$t("app.error"),
        cb: () => {}
      }
    ) {
      this.setLoading(true);
      this.setError(false);
      this.setSuccess(false);
      try {
        await action();
        this.setSuccess(success.message);
        await success.cb();
      } catch (err) {
        this.setError(error.message);
        await error.cb(err);
      }
      this.setLoading(false);
    }
  }
};
