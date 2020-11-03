const brain_gcd_module = (a, b) => {
  for (let i = a; i > 0; i--) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return 1;
};

export default brain_gcd_module;
