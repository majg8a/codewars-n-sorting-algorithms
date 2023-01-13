// removeZeros=r=a=>a[0]?[...a].pop()?a:r(a.slice(0,-1)):r(a.slice(1))

//removeZeros=a=>Array.from(a.join("").replace(/^0+|0+$/g,""),n=>+n)

//    Array.from(String(12345),)

// removeZeros=a=>a.join('').replace(/0/g,' ').trim().replace(/ /g,0)

// removeZeros = r = (a) => (a[0] && [...a].pop() ? a : r(a.slice(1).reverse()));

// removeZeros = r = ([u, ...a]) => u ? [u, ...a] : [...a].pop() ? [u, ...a] : r(a.reverse());

// removeZeros=r=a=>a[0]&&[...a].pop()?a:r(Array.from(+a.reverse().join("")+"",n=>+n))
// removeZeros=a=>Array.from(/[1-9].*[1-9]/.exec(a)+"",n=>+n)

removeZeros=a=>eval(`[${/[1-9].*[1-9]/.exec(a)}]`)
console.log(removeZeros([0, 0, 0, 0, 0, 9, 0, 0, 0, 0, 4, 0, 0]));
