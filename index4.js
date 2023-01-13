function includes(str="") {
    // const limit = Math.ceil(str.length / 2) ? Math.ceil(str.length / 2) : 1;
    // let res = true;
    // for (let i = 0; i < limit; i++) {
    //   if (!res || i === limit) {
    //     return res;
    //   }
    //   if (str[i] === "5" || str[str.length - 1 - i] === "5") {
    //     res = false;
    //   }
    // }


    return str[str.length-1] === "5" ;
  }
  
  function dontGiveMeFive(start, end) {
    let c = 0;
    function recursiveFunction(start, end, total = 0) {
      if (start >= end) return total;
      if (!includes(BigInt(start).toString()) && start <= end) {
        total++;
      }
      if (!includes(BigInt(end).toString()) && start <= end) {
        total++;
      }
      c = c + 2;
      return recursiveFunction(start + 1, end - 1, total);
    }
    const res = recursiveFunction(start, end);
    return res;
  }


  