#!/bin/node
import { program } from "commander";

enum Operation {
  "DIVIDE",
  "MULTIPLY",
}

type Options = {
  reverse: boolean;
  base: number;
};

program
  .option("-r, --reverse", "Reverse to convert rem values to px", false)
  .option("-b, --base <base>", "Change the base value", "16")
  .argument("number(s)")
  .parse();

const args = program.args;
const options = program.opts<Options>();
const operation: Operation = options.reverse
  ? Operation.MULTIPLY
  : Operation.DIVIDE;

args.forEach((argument) => {
  const number = Number(argument);

  if (operation === Operation.DIVIDE) {
    console.log(`${number}px : ${number / options.base}rem`);
    return;
  }
  if (operation === Operation.MULTIPLY) {
    console.log(`${number}rem : ${number * options.base}px`);
    return;
  }
});
