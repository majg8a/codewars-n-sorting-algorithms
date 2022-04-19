function getFinalOrder(k, amount = []) {
  // Write your code here
  let q = Object.keys(amount);
  const res = [];
  while (q.length > 0) {
    const total = amount[0];
    const remaining = total <= k ? 0 : total - k;
    if (!remaining) {
      res.push(Number(q[0]) + 1);
      q = q.slice(1);
      amount = amount.slice(1);
    } else {
      if (q.length === 1) continue;
      const tempQ = q[0];
      q = q.slice(1);
      amount = amount.slice(1);
      q.push(tempQ);
      amount.push(remaining);
    }
  }
  return res;
}

console.log(getFinalOrder(2, [1, 3, 2]))
