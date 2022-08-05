const fibIterative = (n) => {
  const result = [0, 1];

  while (result.length < n) {
    result.push(result[result.length - 2] + result[result.length - 1]);
  }

  return result;
};

console.log(fibIterative(8));

const fibRecursive = (n, a = [0, 1]) => {
  if (a.length >= n) return a;
  return fibRecursive(n, [...a, a[a.length - 2] + a[a.length - 1]]);
};

console.log(fibRecursive(8));
