const express = require("express");
const cors = require("cors");
const app = express();


//Importing Configuration
const config = require("./config/config");

//Importing Routes
const postRouter = require("./routes/postRoutes");
const galleryRouter = require("./routes/galleryRoutes");
const albumRouter = require("./routes/albumRoutes");

//Middlewares
app.use(express.json())

app.use(cors());

//Routes
app.use("/api/posts", postRouter);
app.use("/api/gallery", galleryRouter);
app.use("/api/photos", albumRouter);

//Enable Cors
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
  res.setHeader('Access-Control-Allow-Credentials', true);
  next();
});
//Starting Server
app.listen(config.port, config.hostname, () => {
  console.log(`Server is running at http://${config.hostname}:${config.port}`);
});
