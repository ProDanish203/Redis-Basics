import client from "./client.js";

async function init() {
  await client.set("user:5", "danish");
  const value = await client.get("user:5");

  //   await client.expire("user:5", 5);
  //   await client.del("user:5");

  console.log("value", value);
}

init();
