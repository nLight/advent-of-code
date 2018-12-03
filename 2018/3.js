const input = ["#1 @ 1,3: 4x4", "#2 @ 3,1: 4x4", "#3 @ 5,5: 2x2"];

function parseClaim(acc, claim) {
  const m = claim.match(/(\#\d+) \@ (\d+),(\d+): (\d+)x(\d+)/);

  acc[m[1]] = {
    x1: parseInt(m[2], 10),
    y1: parseInt(m[3], 10),
    x2: parseInt(m[2], 10) + parseInt(m[4], 10),
    y2: parseInt(m[3], 10) + parseInt(m[5], 10)
  };

  return acc;
}

function mapClaim([id, claim]) {
  const patch = [];

  for (let i = claim.x1 + 1; i <= claim.x2; i++) {
    for (let j = claim.y1 + 1; j <= claim.y2; j++) {
      patch.push([id, `${i}:${j}`]);
    }
  }

  return patch;
}

const claims = input.reduce(parseClaim, {});
const grid = Object.entries(claims).reduce((acc, claim) => {
  mapClaim(claim).reduce((acc2, [id, coord]) => {
    if (!acc2[coord]) {
      acc2[coord] = [id];
    } else {
      acc2[coord].push(id);
    }
    return acc2;
  }, acc);

  return acc;
}, {});

console.log("Part 1: ", Object.values(grid).filter(v => v.length > 1).length);

const intersectingIds = Object.values(grid)
  .filter(v => v.length > 1)
  .reduce((acc, ids) => {
    ids.forEach(i => (acc[i] = 1));
    return acc;
  }, {});

console.log(
  "Part 2: ",
  Object.keys(claims).filter(k => !intersectingIds[k])[0]
);
