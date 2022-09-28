#! /usr/local/bin/node

const { args } = require("./args");
const currentDate = new Date();
if (args.m) {
  console.log(currentDate.getMonth() + 1);
} else if (args.d) {
  console.log(currentDate.getDate());
} else if (args.y) {
  console.log(currentDate.getFullYear());
} else {
  console.log(currentDate);
}
