import axios from "axios";

export default {
  get(url) {
    return axios.get(url).then(res => res.data);
  },
  post(url, params) {
    return axios.post(url, params).then(res => res.data);
  },
  patch(url, params) {
    return axios.patch(url, params).then(res => res.data);
  }
};
