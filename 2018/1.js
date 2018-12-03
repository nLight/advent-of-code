const input = [];

const frequencies = {};
let acc = 0;

hey: while (true) {
  for (let i = 0; i < input.length; i++) {
    const current = input[i];
    acc = acc + current;

    if (frequencies[acc]) {
      console.log("Repeat: ", acc);
      break hey;
    }

    frequencies[acc] = 1;
  }
}
