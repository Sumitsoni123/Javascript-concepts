// parallel execution of code

let fs = require("fs");

console.log("before");

fs.readFile("t1.txt", cb1);
fs.readFile("t2.txt", cb2);
fs.readFile("t3.txt", cb3);

function cb1(err, content) {
  console.log("content", content);
}
function cb2(err, content) {
  console.log("content", content);
}
function cb3(err, content) {
  console.log("content", content);
}

console.log("After");



// serial execution of code

fs.readFile("t1.txt", cb1);

function cb1(err, content) {
  console.log("content", content);
  fs.readFile("t2.txt", cb2);

  function cb2(err, content) {
    console.log("content", content);
    fs.readFile("t3.txt", cb3);

    function cb3(err, content) {
      console.log("content", content);
    }
  }
}

console.log("After");
