export class Concession {
    private cars: { brand: string; model: string }[] = [];

    constructor() {}

    // Ajouter une voiture à la concession
    addCar(brand: string, model: string): void {
        this.cars.push({ brand, model });
    }

    // Récupérer toutes les voitures de la concession
    getAllCars(): { brand: string; model: string }[] {
        return this.cars;
    }

    // Récupérer les marques uniques des voitures de la concession
    getUniqueBrands(): string[] {
        const uniqueBrands = new Set<string>();
        this.cars.forEach(car => uniqueBrands.add(car.brand));
        return Array.from(uniqueBrands);
    }

    // Supprimer une voiture de la concession
    removeCar(car: { brand: string; model: string }): void {
        this.cars = this.cars.filter(c => c !== car);
    }
}
