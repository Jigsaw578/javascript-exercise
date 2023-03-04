function removeFromArray(array, deleteItem) {
  if (!array || !deleteItem) {
    return
  }
  const X = array.indexOf(deleteItem)
  if (X<0) {
    console.log("DeleteItem k thuộc array");
    return
  }
  array.splice(X,1);
  return array
}
console.log(removeFromArray([1, 2, 3, 4], 3));
