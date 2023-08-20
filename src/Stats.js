export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start by adding new item to your packing list</em>
      </footer>
    );

  const packedItems = items.reduce(
    (count, item) => (item.packed === true ? count + 1 : count),
    0
  );

  const percentage = Math.round((packedItems / items.length) * 100);
  return (
    <footer className="stats">
      <em>
        {percentage === 100
          ? "You Packed everything, Let's go"
          : `🧳 You have ${
              items.length
            } items on your list, and you already packed ${" "}
          ${packedItems} (${percentage} %)`}
      </em>
    </footer>
  );
}
