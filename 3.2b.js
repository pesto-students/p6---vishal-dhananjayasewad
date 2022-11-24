var car = {
    number: "GA12345",
    brand: "Toyota",

    displayDetails: function() {
        console.log(this.number + " " + this.brand);
    }
}

// car.displayDetails();

var myCarDetails = car.displayDetails.bind(car);
myCarDetails();
