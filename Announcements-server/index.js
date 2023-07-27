const express = require("express");
const cors = require("cors");
require("dotenv").config();
const server = express();
const port = 8080;
const connecttodb = require("./controllers/db");
const userRoute = require("./Routes/userRoutes");
const AnnouncementRoute = require("./Routes/AnnouncementRoutes");
const bodyParser = require("body-parser");

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(cors());
connecttodb();

server.use("/user", userRoute);
server.use("/announcements", AnnouncementRoute);

server.listen(port, () => {
  console.log(`The server is listening on http://localhost:${port}`);
});
