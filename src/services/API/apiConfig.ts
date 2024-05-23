import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:5001/developing/us-central1/jp_api_v2",
  // baseURL: "https://us-central1-oceanlivereact.cloudfunctions.net/jp_api_v2",
  // baseURL: "http://127.0.0.1:5001/oceanlivereact/us-central1/jp_api_v2",

  // You can also add other default configurations here, such as headers, timeouts, etc.
});

export default instance;
