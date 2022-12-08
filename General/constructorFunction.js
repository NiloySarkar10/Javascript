// Implementing a constructor function of type Vehicle

const Vehicle = (function () {
    function Vehicle(tyreCount, type) {
        this.tyreCount = tyreCount;
        this.type = type;
    }

    Vehicle.prototype.displayTyreCount = function () {
        console.log(`Count of tyre: ${this.tyreCount}`);
    }
    Vehicle.prototype.displayType = function () {
        console.log(`Type of vehicle: ${this.type}`);
    }

    return Vehicle;
}())