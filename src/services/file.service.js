const axios = require("axios");

const API_URL = "http://localhost:9000/api/files";

class FileService {
  getFileList() {
    return axios.get(API_URL);
  }
}

export default new FileService();
