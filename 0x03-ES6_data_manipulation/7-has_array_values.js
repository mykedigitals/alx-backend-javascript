export default function hasValuesFromArray(set, list) {
  let harr = true;
  list.map((x) => {
    if (!set.has(x)) {
      harr = false;
    }
  });

  return harr;
}
