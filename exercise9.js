import fs from "fs";
import fetch from "node-fetch";
import process from "process";

const userId = process.argv[2];

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((response) => response.json())
  .then((posts) => {
    const userPosts = posts.filter((post) => post.userId === Number(userId));
    const jsonData = JSON.stringify(userPosts);
    console.log(jsonData);

    const filePath =
      "C:/Users/Pankaj Kandpal/Desktop/Desktop/blockchain/blockchain-learning-week-2/userPosts.json";
    const fileSizeLimit = 2 * 1024 * 1024;

    fs.stat(filePath, (err, stats) => {
      if (err) {
        fs.writeFile(filePath, jsonData, "utf8", (err) => {
          if (err) {
            console.error("Error writing to file:", err);
          } else {
            console.log("Data logged to userPosts.json");
          }
        });
      } else {
        if (stats.size + jsonData.length > fileSizeLimit) {
          const newFilePath = `/c:/Users/Pankaj Kandpal/Desktop/Desktop/blockchain/blockchain-learning-week-2/userPosts_${Date.now()}.json`;
          fs.writeFile(newFilePath, jsonData, "utf8", (err) => {
            if (err) {
              console.error("Error writing to file:", err);
            } else {
              console.log(`Data logged to ${newFilePath}`);
            }
          });
        } else {
          fs.appendFile(filePath, jsonData, "utf8", (err) => {
            if (err) {
              console.error("Error appending to file:", err);
            } else {
              console.log("Data logged to userPosts.json");
            }
          });
        }
      }
    });
  })
  .catch((error) => {
    console.error("Error:", error);
  });
