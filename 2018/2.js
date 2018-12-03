const input = [];

const res = input.reduce(
  (acc, word) => {
    const count2 = {};

    for (let i = 0; i < word.length; i++) {
      if (count2[word[i]]) {
        count2[word[i]]++;
      } else {
        count2[word[i]] = 1;
      }
    }

    acc[2] += Object.values(count2).some(i => i === 2);
    acc[3] += Object.values(count2).some(i => i === 3);

    return acc;
  },
  { 2: 0, 3: 0 }
);

console.log("Checksum: ", res["2"] * res["3"]);

function compareIDs(a, b) {
  const matching = [];
  let match = false;

  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      matching.push(a[i]);
    } else {
      if (!match) {
        match = true;
      } else {
        return [false, matching];
      }
    }
  }

  return [match, matching];
}

for (let i = 0; i < input.length; i++) {
  for (let j = i + 1; j < input.length; j++) {
    const res = compareIDs(input[i], input[j]);
    if (res[0]) {
      console.log("Match: ", res[1].join(""));
    }
  }
}
