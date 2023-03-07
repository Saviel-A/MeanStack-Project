const axios = require("axios");
const config = require("../config/config");

//Get photos by album id
exports.getPhotosByAlbumId = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await axios.get(
      `${config.apiBaseUrl}/photos/?albumId=${id}`
    );
    res.status(200).json(response.data);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
};
