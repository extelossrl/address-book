import axios from "axios";

export default {
  get(url, auth = true) {
    let config = {};

    if (auth) {
      config = {
        headers: {
          "Auth..": auth
        }
      };
    }

    return axios.get(url, config).then(res => res.data);
  }
};
