const express = require("express");
const app = express();
const API_KEY = "14b626c6-5929-4318-9084-33bee95a76bc";
const URL = "https://project-2-api.herokuapp.com";
const PORT = 8080;
const axios = require("axios");
const fs = require("fs");

app.listen(PORT, () => {
  console.log(`Server is listening on: ${PORT}`);
});

/**
 * TO GENERATE JSON FILES FOR DEFAULT DATA
 */
// axios.get(`${URL}/videos?api_key=${API_KEY}`).then(({ data }) => {
//   fs.writeFile("./data/videos.json", JSON.stringify(data), (err) => {
//     if (err) throw err;
//     console.log("saved");
//   });
// });

// fs.readFile("./data/videos.json", "utf8", (err, data) => {
//   if (err) throw err;
//   JSON.parse(data).forEach((video) => {
//     axios
//       .get(`${URL}/videos/${video.id}?api_key=${API_KEY}`)
//       .then(({ data }) => {
//         fs.writeFile(
//           `./data/videos/${video.id}.json`,
//           JSON.stringify(data),
//           (err) => {
//             if (err) throw err;
//             console.log("saved");
//           }
//         );
//       });
//   });
// });
