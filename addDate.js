#! /usr/local/bin/node

const moment = require("moment");
const { args } = require("./args");
const currentDate = moment(new Date());
const amount = Number(args._[0]);
if (isNaN(amount)) {
  console.log("error amount");
  return;
}
if (args.m) {
  currentDate.add(amount, "months");
} else if (args.d) {
  currentDate.add(amount, "days");
} else if (args.y) {
  currentDate.add(amount, "years");
}

console.log(currentDate.toISOString());
