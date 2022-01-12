var arr1 = [1, 2, 3, 4, 5];

var arr2 = [1, 2, 3];

let getUnion = () => {
  var join = [...arr1, ...arr2];
  //   console.log(join);

  var remove = [...new Set(join)];
  console.log(remove);
};

getUnion();
