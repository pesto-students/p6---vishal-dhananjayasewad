var car = {
    number: "GA12345",
    brand: "Toyota"
}

function displayDetails(ownerName) {
    console.log(ownerName + ", this is your car: " + this.number + " " + this.brand);
}
displayDetails.apply(car, ["Rohit"]);