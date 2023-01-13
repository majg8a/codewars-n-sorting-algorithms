function mix(s1, s2) {
  const countCharacters = (str) =>
    str
      .split("")
      .filter((str) => str != " ")
      .reduce((total, current) => {
        total[current] = total[current] ? total[current] + 1 : 1;
        return total;
      }, {});
  const validated = (obj) =>
    Object.keys(obj)
      .filter((key) => key.toLowerCase() == key && obj[key] > 1)
      .sort()
      .sort((a, b) => obj[b] - obj[a])
      .map((key) => [...Array(obj[key])].map((i) => key).join(""));

  const s1Count = countCharacters(s1);
  const validS1 = validated(s1Count);
  const s2Count = countCharacters(s2);
  const validS2 = validated(s2Count);
  const isS1longest = validS1.length >= validS2.length;

  const longest = isS1longest ? validS1 : validS2;

  return longest.reduce(() => {}, "");
}
console.log(mix("Are they here", "yes, they are here"));
