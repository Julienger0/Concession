export class Concession {
    private cars: { brand: string; model: string }[] = [];

    constructor() {}

    addCar(brand: string, model: string): void {
        this.cars.push({ brand, model });
    }

    getAllCars(): { brand: string; model: string }[] {
        return this.cars;
    }

    getUniqueBrands(): string[] {
        const uniqueBrands = new Set<string>();
        this.cars.forEach(car => uniqueBrands.add(car.brand));
        return Array.from(uniqueBrands);
    }

    removeCar(car: { brand: string; model: string }): void {
    this.cars = this.cars.filter(c => c.brand !== car.brand || c.model !== car.model);
}

}
