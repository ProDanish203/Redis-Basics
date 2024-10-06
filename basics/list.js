import client from "./client.js";

async function init() {
  const listKey = "tasks";
  await client.lPush(listKey, "task1");
  await client.rPush(listKey, "task2");

  await client.rPush(listKey, "task3");

  //   To read the list
  const tasks = await client.lRange(listKey, 0, -1);
  console.log("tasks", tasks);

  const task1 = await client.rPop(listKey);
  const task2 = await client.rPop(listKey);
  const task3 = await client.rPop(listKey);
  console.log("task1", task1);
  console.log("task2", task2);
  console.log("task3", task3);
}

init();
