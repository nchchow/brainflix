const fs = require("fs");
const axios = require("axios");
const API_KEY = "14b626c6-5929-4318-9084-33bee95a76bc";
const URL = "https://project-2-api.herokuapp.com";

/**
 * TO GENERATE JSON FILES FOR DEFAULT DATA
 */
const videosToJson = async () => {
  const { data } = await axios.get(`${URL}/videos?api_key=${API_KEY}`);
  fs.writeFile("./src/models/videos.json", JSON.stringify(data), (err) => {
    if (err) throw err;
    console.log("saved");
  });
};

const eachVideoToJson = async () => {
  fs.readFile("./src/models/videos.json", "utf8", (err, data) => {
    if (err) throw err;
    JSON.parse(data).forEach((video) => {
      const { data } = await axios.get(
        `${URL}/videos/${video.id}?api_key=${API_KEY}`
      );
      fs.writeFile(
        `./src/models/videos/${video.id}.json`,
        JSON.stringify(data),
        (err) => {
          if (err) throw err;
          console.log("saved");
        }
      );
    });
  });
};
