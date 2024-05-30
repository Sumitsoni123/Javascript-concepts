let obj = {
  name: "Sumit",
  age: 22,

  address: {
    city: "bangalore",
    state: "karnataka",
  },
};


function flattenObj(obj, parent, res = {}) {
  for (let key in obj) {
    let propsName = parent ? parent + "_" + key : key;
    if (typeof obj[key] == "object") {
      flattenObj(obj[key], propsName, res);
    } else {
      res[propsName] = obj[key];
    }
  }
  return res
}

console.log(flattenObj(obj, "", {}))