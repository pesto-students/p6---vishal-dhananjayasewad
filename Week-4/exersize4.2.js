var Teacher = function () {
  this.teach = function (subject) {
    console.log(this.name + " is now teaching " + subject);
  };
};
Teacher.prototype = new Person();
var him = new Teacher();

him.initialize("Dhananjay", 45);
him.teach("Inheritance");

// output --> Dhananjay is now teaching Inheritance
