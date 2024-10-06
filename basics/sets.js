import client from "./client.js";

async function init() {
  const setKey = "tags";
  await client.sAdd(setKey, "tag1");
  await client.sAdd(setKey, "tag2");

  await client.sAdd(setKey, "tag3");

  //   To read the set
  const tags = await client.sMembers(setKey);
  console.log("tags", tags);

  //   const tag1 = await client.sPop(setKey);
  //   const tag2 = await client.sPop(setKey);
  //   const tag3 = await client.sPop(setKey);

  //   console.log("tag1", tag1);
  //   console.log("tag2", tag2);
  //   console.log("tag3", tag3);

  //   To check if a value exists in the set
  const exists = await client.sIsMember(setKey, "tag1");

  console.log("exists", exists);

  //   To remove a value from the set
  await client.sRem(setKey, "tag1");

  const tagsAfterRemoval = await client.sMembers(setKey);
  console.log("tagsAfterRemoval", tagsAfterRemoval);

  //   To get the number of elements in the set
  const length = await client.sCard(setKey);
  console.log("length", length);
}

init();
