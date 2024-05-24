var person = {
  firstName: "Lin",
  lastName: "Jon",
  getFullName: function () {
    var fullName = this.firstName + " " + this.lastName;
    return fullName;
  },
};

// bind
var logName = function (s1, s2) {
  console.log(this.getFullName(), " " + s1 + " " + s2);
};

// .bind(person);

// logName("a", "b");

// call
logName.call(person, "a", "b");
// apply :跟call 只差在[]
logName.apply(person, ["a", "b"]);

// IIFE: call、apply 都可以用
(function (s1, s2) {
  console.log(this.getFullName(), " " + s1 + " " + s2);
}).call(person, "a", "b");

// 函式借用(function borrowing)

var person2 = {
  firstName: "Jane",
  lastName: "Doe",
};

console.log(person.getFullName.apply(person2));

//function currying
function multiply(a, b) {
  return a * b;
}

var multiplyByTwo = multiply.bind(this, 2);
console.log(multiplyByTwo(4));
