export default function Item({ item, onDeleteItems, onToggleItem }) {
    return (
      <li>
        <input type="checkbox" onClick={() => onToggleItem(item.id)} />
        <span
          style={
            item.packed
              ? { textDecoration: "line-through", textDecorationThickness: "2px" }
              : {}
          }
        >
          {item.quantity} {item.description}
        </span>
        <button onClick={() => onDeleteItems(item.id)}>❌</button>
      </li>
    );
  }