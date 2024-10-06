import client from "./client.js";

async function init() {
  const hashKey = "user:5";
  await client.hSet(hashKey, "name", "danish");
  await client.hSet(hashKey, "age", 25);
  await client.hSet(hashKey, "city", "lahore");
  await client.hSet(hashKey, "country", "pakistan");

  //   To read the hash
  const user = await client.hGetAll(hashKey);
  console.log("user", user);

  //   To read a specific field
  const name = await client.hGet(hashKey, "name");
  console.log("name", name);

  //   To check if a field exists
  const exists = await client.hExists(hashKey, "name");
  console.log("exists", exists);

  //   To remove a field
  await client.hDel(hashKey, "name");

  const userAfterRemoval = await client.hGetAll(hashKey);
  console.log("userAfterRemoval", userAfterRemoval);

  //   To get the number of fields in the hash
  const length = await client.hLen(hashKey);
  console.log("length", length);

  //   To get all the fields in the hash
  const fields = await client.hKeys(hashKey);
  console.log("fields", fields);

  //   To get all the values in the hash
  const values = await client.hVals(hashKey);
  console.log("values", values);

  //   To increment a field
  await client.hIncrBy(hashKey, "age", 1);

  const userAfterIncrement = await client.hGetAll(hashKey);
  console.log("userAfterIncrement", userAfterIncrement);
}

init();
