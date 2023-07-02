function decimalToBinary(num) {
  //Write you code here
	let binary = "";
  if (num === 0) {
    return "0";
  }

  while (num > 0) {
    binary = (num % 2) + binary;
    decimal = Math.floor(num / 2);
  }

  return binary;
}
window.decimalToBinary = decimalToBinary;

