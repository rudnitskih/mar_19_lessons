function sum(...numbers) {
  let total = 0;
  numbers.forEach((number) => {
    total += number;
  });

  console.log('Total=', total);
}

sum(1, 2, 3); // 6
sum(2, 2); // 4
sum(10, 10, 10, 10); // 40
