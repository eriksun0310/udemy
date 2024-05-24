function a() {
  console.log(this);
}

var b = function () {
  console.log(this);
};

// a();
// b();

var c = {
  name: "The c object",
  log: function () {
    var self = this;
    var log2 = function () {
      console.log("self 2 ", self);
    };
    console.log("self 1 ", self);
    log2();
  },
};

c.log();
