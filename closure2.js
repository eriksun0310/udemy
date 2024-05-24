function buildFunctions() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(function () {
      console.log("i", i);
    });
  }
  return arr;
}
var fs = buildFunctions();

// fs[0]();
// fs[1]();
// fs[2]();

function buildFunctions2() {
  var arr = [];
  for (var i = 0; i < 3; i++) {
    arr.push(
      (function (j) {
        return function () {
          console.log("j", j);
        };
      })(i)
    );
  }
  return arr;
}
var fs2 = buildFunctions2();

// fs2[0]();
// fs2[1]();
// fs2[2]();

function makeGreeting(language) {
  return function (firstName, lastName) {
    if (language === "en") {
      console.log("Hello   " + firstName + "  " + lastName);
    } else if (language === "es") {
      console.log("Hola   " + firstName + "  " + lastName);
    }
  };
}

var greetingEnglish = makeGreeting("en");
var greetingSpanish = makeGreeting("es");

// greetingEnglish("aa", "bb");
// greetingSpanish("cc", "dd");





function sayHiLater(){

  var sayHi = 'HI HI'
  setTimeout(()=>{
    console.log('sayHi', sayHi)
  }, 2000)
}

sayHiLater()

//callBack
function aa(callback){
  console.log('11111')
  callback()
}

aa(function(){
  console.log('22222')
})
