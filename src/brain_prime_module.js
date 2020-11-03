const brain_prime_module = (num) => {
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export default brain_prime_module;
