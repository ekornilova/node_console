const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");

module.exports = {
  args: yargs(hideBin(process.argv))
    .option("date", {
      type: "boolean",
      alias: "d",
    })
    .option("month", {
      type: "boolean",
      alias: "m",
    })
    .option("year", {
      type: "boolean",
      alias: "y",
    }).argv,
};
