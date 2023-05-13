// returns a randomly selected item from array of items
function choice(items) {
  return items[Math.floor(Math.random() * items.length)];
}

// removes the first matching item from items, if item exists, and returns it. Otherwise returns undefined.
function remove(items, item) {
  const item_index = items.indexOf(item);
  if (item_index >= 0) {
    return items.splice(item_index, 1)[0];
  }

  return undefined;
}

export { choice, remove };
