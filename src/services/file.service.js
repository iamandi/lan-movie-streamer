const axios = require("axios");

const API_URL = "http://localhost:9000/api/files";

class FileService {
  getFileList() {
    return axios.get(API_URL);
  }

  getUserBoard() {
    return axios.get(API_URL + "me");
  }

  getModeratorBoard() {
    return axios.get(API_URL + "mod");
  }

  getAdminBoard() {
    return axios.get(API_URL + "admin");
  }
}

export default new FileService();
