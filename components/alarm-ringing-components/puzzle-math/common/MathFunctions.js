const operations = ["+", "-", "*", "/"];
const betweenOperations = ["+", "-"];

const chooseOperation = (operationsArray) => {
  return operationsArray[Math.round(Math.random() * (operationsArray.length - 1))]
}

const generateNumber = (maxValue) => {
  return Math.round(Math.random() * maxValue);
}

const getNumbers = (operation) => {
  let first, second, value;
  if (!(operation in ["*", "/"])) {
    first = generateNumber(200);
    second = generateNumber(200);
    if (operation === "+") {
        value = first + second;
    }
    else {
        value = first - second;
    }
  }
  if (operation === "*") {
    first = generateNumber(10);
    second = generateNumber(10);
    value = first * second;
  }
  else if (operation === "/") {
    while (true) {
      first = generateNumber(100);
      second = generateNumber(100);
      if (first % second === 0) {
        value = Math.floor(first / second);
        break;
      }
    }
  }
  return [first, second, value];

}

export const createMathProblem = () => {
  let problem = "";
  let firstOperation = chooseOperation(operations);
  let [first, second, firstValue] = getNumbers(firstOperation);
  problem += `${first} ${firstOperation} ${second}`;
  let secondOperation = chooseOperation(operations);
  let [third, fourth, secondValue] = getNumbers(secondOperation);
  let betweenOperation = chooseOperation(betweenOperations);
  problem += ` ${betweenOperation} ${third} ${secondOperation} ${fourth}`
  let resultValue = eval(problem);
  problem += ' = ?'
  return [problem, resultValue];
}