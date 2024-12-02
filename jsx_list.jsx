function ItemList() {
  const items = ["Яблуко", "Банан", "Апельсин"];
  return (
    <ul> 
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))} 
    </ul>
  );
}

export default ItemList