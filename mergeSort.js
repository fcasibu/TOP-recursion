function mergeSort(a) {
  if (a.length === 1) return a;
  const result = [];
  const mid = Math.trunc(a.length / 2);
  const left = mergeSort(a.slice(0, mid));
  const right = mergeSort(a.slice(mid));

  ((l, r) => {
    let i = 0,
      j = 0;

    while (i < l.length && j < r.length) {
      l[i] < r[j] ? result.push(l[i++]) : result.push(r[j++]);
    }
    while (i < l.length) result.push(l[i++]);
    while (j < r.length) result.push(r[j++]);
  })(left, right);

  return result;
}

const random = Array.from({ length: 50 }, () =>
  Math.floor(Math.random() * 100)
);

console.log(mergeSort(random));
