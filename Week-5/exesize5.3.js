function hasDuplicate(arr) {
  var map = {},
    i,
    size;

  for (i = 0, size = arr.length; i < size; i++) {
    if (map[arr[i]]) {
      return false;
    }

    map[arr[i]] = true;
  }

  return true;
}

//  using set
const arr1 = ["a", "a"];
const arr2 = ["a", "b"];

function hasDuplicates(array) {
  if (array.length !== new Set(array).size) {
    return true;
  }

  return false;
}

console.log(hasDuplicates(arr1));

// output --> false
