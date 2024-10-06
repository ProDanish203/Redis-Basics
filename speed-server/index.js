import express from "express";
import axios from "axios";
import redis from "./redis.js";

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const cachedPosts = await redis.get("posts");

  if (cachedPosts) {
    return res.status(200).json({
      message: "Hello from the speed up nodejs server",
      data: JSON.parse(cachedPosts),
    });
  }

  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );

  // Set the data in redis
  await redis.set("posts", JSON.stringify(data));
  await redis.expire("posts", 60);
  return res
    .status(200)
    .json({ message: "Hello from the speed up nodejs server", data });
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
