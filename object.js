let array2 = [
  {
    name: "a",
  },
  {
    name: "b",
  },
  {
    name: "c",
  },
];

let obj = {
  firstname: "Knuckles",
  lastname: "Huang",
  address: {
    street: "111 Main St.",
    city: "Taipei",
  },
};

var knuckles = {
  // <- 物件名稱改成人名
  firstname: "Knuckles",
  lastname: "Huang",
  address: {
    street: "111 Main St.",
    city: "Taipei",
  },
};

function greet(person) {
  console.log("HI", person.firstname);
}

greet(knuckles);

greet({
  firstname: "AAA",
});

var person = new Object();

person["firstName"] = "Tony";

person.address = new Object();
person.address.street = "12344";
person.address.city = "aaaaa";
// console.log(person);

// by value
var a = 3;
var b;

b = a;
a = 2;
console.log("a", a);
console.log("b", b);

//by reference

var c = { greeting: "hi" };
var d;
d = c;
c.greeting = "hello";

function chengObj(obj) {
  obj.greeting = "hola";
}

chengObj(d);

c = { greeting: "rrrrrr" };

console.log("c", c);
console.log("d", d);
