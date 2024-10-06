import client from "./client.js";

async function init() {
  const streamKey = "logs";

  // To add a message to the stream
  //   await client.xAdd(streamKey, "*", { message: "user logged in" });
  //   await client.xAdd(streamKey, "*", { message: "user logged out" });
  //   await client.xAdd(streamKey, "*", { message: "user signed up" });
  //   await client.xAdd(streamKey, "*", { message: "user updated profile" });

  // To read the stream
  const messages = await client.xRead(
    { key: streamKey, id: "0-0" },
    { COUNT: 4, BLOCK: 10 }
  );
  console.log(
    "messages",
    messages[0].messages.map((m) => m)
  );

  // To read the length of the stream
  const length = await client.xLen(streamKey);
  console.log("length", length);
}

init();
