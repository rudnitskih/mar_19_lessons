function calculateDiscount(price, discount) {
  return price -
    (price * discount / 100);
}

const calculateDiscount2 = (price, discount) => {
  return price -
    (price * discount / 100);
};

const ironPrice = calculateDiscount(100, 10);
const freedzePrice = calculateDiscount2(100, 15);

console.log('NewPrice=', ironPrice);
