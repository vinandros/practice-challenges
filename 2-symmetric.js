// Algorithms: Find the Symmetric Difference

// The mathematical term symmetric difference (△ or ⊕) of two sets is the set of elements which are in either
// of the two sets but not in both. For example, for sets A = {1, 2, 3} and B = {2, 3, 4}, A △ B = {1, 4}.

// Symmetric difference is a binary operation, which means it operates on only two elements. So to evaluate
//  an expression involving symmetric differences among three elements (A △ B △ C), you must complete one
//  operation at a time. Thus, for sets A and B above, and C = {2, 3}, A △ B △ C = (A △ B) △ C = {1, 4} △ {2, 3} = {1, 2, 3, 4}.

function sym(args) {
  const argsArray = [...arguments];
  if (argsArray.length < 2) {
    console.log("We need at least 2 array to completed operation");
    return;
  }
  const firstArray = argsArray.shift();
  const secondArray = argsArray.shift();

  const evalu = (firstArray, secondArray) =>
    firstArray.reduce((acc, elem) => {
      if (!secondArray.includes(elem)) {
        console.log(elem);
        acc.push(elem);
      }
      return acc;
    }, []);

  const result = [
    ...new Set(
      evalu(firstArray, secondArray).concat(evalu(secondArray, firstArray))
    ),
  ];
  if (argsArray.length > 0) {
    return sym(...argsArray, result);
  } else {
    return result;
  }
}

sym([1, 2, 3], [5, 2, 1, 4], [6, 2, 3, 4]);
