const express = require("express");
const app = express();
const cors = require("cors");

// routes
const videoRoutes = require("./src/routes/videoRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

// middleware
app.use(express.json());
app.use(cors());

const PORT = 8080;

app.use("/videos", videoRoutes);

app.use("/videos", commentRoutes);

app.get("/*", (req, res) => {
  res.sendStatus(404);
});

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});
