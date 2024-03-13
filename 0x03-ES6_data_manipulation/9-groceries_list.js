export default function groceriesList() {
  const groMap = new Map();
  const items = {
    Apples: 10,
    Tomatoes: 10,
    Pasta: 1,
    Rice: 1,
    Banana: 5,
  };

  const list = Array.from(Object.keys(items));

  list.map((item) => groMap.set(item, items[item]));
  return groMap;
}
