#! /usr/local/bin/node

const readline = require("readline");
const { stdin: input, stdout: output } = require("node:process");
const rl = readline.createInterface({ input, output });
const number = Math.floor(Math.random() * 100);
rl.write("Загадано число в диапазоне от 0 до 100\n");
rl.on("line", (input) => {
  if (input === "close") {
    rl.close();
    return;
  }
  const userNumber = Number(input);
  if (isNaN(userNumber)) {
    console.log(`Неверный формат числа`);
  }
  if (userNumber === number) {
    console.log(`Отгадано число ${number}`);
    rl.close();
    return;
  } else {
    console.log(userNumber > number ? "Меньше" : "Больше");
  }
});

rl.on("close", function () {
  console.log("До следующей игры");
});
