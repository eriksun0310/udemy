// 函式表示式Expression
// var greet = (function (name) {
//   return "Hello " + name;
// })("AAA");

// var greeting = greet("AAA");
// console.log(greet);
 
var lastName = 'BBB';

// (function (name) {
//   console.log("Hello  " + name);
// }(lastName));

// (function (name) {
//     console.log("Hello  " + name);
//   })(lastName);



(function (global){
    // var greet = 'Hello'
    global.greet = 'Hello'
    console.log('greet', greet)
}(window))