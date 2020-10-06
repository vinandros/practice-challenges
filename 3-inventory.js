// Algorithms: Inventory Update

// Compare and update the inventory stored in a 2D array against a second 2D array of a fresh delivery.
// Update the current existing inventory item quantities (in arr1). If an item cannot be found, add the new
// item and quantity into the inventory array. The returned inventory array should be in alphabetical order by item.

function updateInventory(arr1, arr2) {
  //sort function to order by second colu
  const sortByProduct = (a, b) => {
    if (a[1] === b[1]) {
      return 0;
    } else {
      return a[1] < b[1] ? -1 : 1;
    }
  };
  // All inventory must be accounted for or you're fired!
  let result = arr2.reduce((acc, elem, index) => {
    //products in stock for update
    const product = arr1.find((value) => value[1] === elem[1]);
    if (product) {
      acc.push([elem[0] + product[0], elem[1]]);
    } else {
      //product in stock that keep equal
      acc.push(elem);
    }
    //Remove update stock from new inven, for add the newes
    if (product) {
      let indexOfProduct = arr1.indexOf(product);
      arr1.splice(indexOfProduct, 1);
    }
    // return;
    return acc;
  }, []);

  console.log(result.concat(arr1).sort(sortByProduct));

  return result.concat(arr1).sort(sortByProduct);
}

// Example inventory lists
var curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

var newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

updateInventory(curInv, newInv);
