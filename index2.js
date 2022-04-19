removeZeros=r=a=>a[0]?[...a].pop()?a:r(a.slice(0, -1)):r(a.slice(1))

//removeZeros=a=>Array.from(a.join("").replace(/^0+|0+$/g,""),n=>+n)

//    Array.from(String(12345),)

// removeZeros=a=>a.join('').replace(/0/g,' ').trim().replace(/ /g,0)

console.log(removeZeros([0, 0, 9, 0, 0, 0, 0, 4, 0, 0]));
