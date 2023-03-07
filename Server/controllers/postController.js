const axios = require("axios");
const config = require("../config/config");

exports.getPosts = async (req, res) => {
  try {
    const response = await axios.get(`${config.apiBaseUrl}/posts`);
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
