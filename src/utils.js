export const formatNumber = (number) => {
  const numberAsString = String(number);

  let newNum = "";

  let counter = 0;

  for (let digit of [...numberAsString].reverse()) {
    counter++;
    if (counter > 3) {
      newNum += ",";
      counter = 1;
    }
    newNum += digit;
  }

  return [...newNum]
    .reverse()
    .reduce((acc, curr) => acc + curr, "");
};
