const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config();
const { PORT, BACKEND_URL } = process.env;

// routes
const videoRoutes = require("./src/routes/videoRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

// middleware
app.use(express.json());
app.use(cors());

app.use("/videos", videoRoutes);

app.use("/videos", commentRoutes);

app.get("/*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is listening on: ${BACKEND_URL}${PORT}`);
});
