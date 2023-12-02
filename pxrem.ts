#!/bin/node
const args: string[] = process.argv.slice(2);

enum OperationType {
  DIVIDE,
  MULTIPLY,
}

let operation: OperationType = OperationType.DIVIDE;
let base = 16;

const numbers: number[] = args.reduce<number[]>((acc, argument) => {
  if (argument === "-r") {
    operation = OperationType.MULTIPLY;
    return acc;
  }

  if (argument.startsWith("-b=")) {
    base = Number(argument.split("=")[1]);
    return acc;
  }

  if (isNaN(Number(argument))) {
    return acc;
  }

  return [...acc, Number(argument)];
}, []);

if (numbers.length === 0) {
  console.error(
    "pxrem: missing argument. Please provide a number.\nExample: 'pxrem 1'"
  );
}

numbers.forEach((number) => {
  switch (operation) {
    case OperationType.DIVIDE: {
      console.log(`${number}px : ${number / base}rem`);
      return;
    }
    case OperationType.MULTIPLY: {
      console.log(`${number}rem : ${number * base}px`);
      return;
    }
  }
});
