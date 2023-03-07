const express = require("express");
const router = express.Router();

const albumController = require("../controllers/albumController");

router.get("/:id", albumController.getPhotosByAlbumId);

module.exports = router;
