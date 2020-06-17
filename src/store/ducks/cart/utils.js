export const addItemToCart = (items, item) => {
  const existingItem = items[item.id];

  return {
    ...items,
    [item.id]: {
      ...item,
      quantity: existingItem ? existingItem.quantity + 1 : 1,
    },
  };
};
