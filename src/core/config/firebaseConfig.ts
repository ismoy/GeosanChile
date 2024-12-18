import axios from "axios";

const BASE_URL = axios.create({
  baseURL: "https://firestore.googleapis.com/v1/projects/geosanchile/databases/(default)/documents/",
  headers: {
      "Content-Type": "application/json",
  },
});

export { BASE_URL };