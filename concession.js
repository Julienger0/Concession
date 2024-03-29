"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Concession = void 0;
var Concession = /** @class */ (function () {
    function Concession() {
        this.cars = [];
    }
    Concession.prototype.addCar = function (brand, model) {
        this.cars.push({ brand: brand, model: model });
    };
    Concession.prototype.getAllCars = function () {
        return this.cars;
    };
    Concession.prototype.getUniqueBrands = function () {
        var uniqueBrands = new Set();
        this.cars.forEach(function (car) { return uniqueBrands.add(car.brand); });
        return Array.from(uniqueBrands);
    };
    Concession.prototype.removeCar = function (car) {
        this.cars = this.cars.filter(function (c) { return c.brand !== car.brand || c.model !== car.model; });
    };
    return Concession;
}());
exports.Concession = Concession;
