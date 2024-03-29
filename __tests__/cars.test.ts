import { test, expect } from 'vitest';
import { Cars } from '../cars'; 

test('Affichage de la liste des marques sans doublons', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Toyota', 'Camry');
  car.addCar('Honda', 'Accord');

  const uniqueBrands = car.getUniqueBrands();

  expect(uniqueBrands).toContain('Toyota');
  expect(uniqueBrands).toContain('Honda');
  expect(uniqueBrands).toHaveLength(2); 
});

test('Affichage de la liste des voitures', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Honda', 'Civic');

  const cars = car.getAllCars();

  expect(cars).toContainEqual({ brand: 'Toyota', model: 'Corolla' });
  expect(cars).toContainEqual({ brand: 'Honda', model: 'Civic' });
  expect(cars).toHaveLength(2); 
});

test('Suppression d\'une voiture', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Honda', 'Civic');
  const carToRemove = { brand: 'Toyota', model: 'Corolla' };

  car.removeCar(carToRemove);

  const cars = car.getAllCars();
  expect(cars).not.toContainEqual(carToRemove);
  expect(cars).toHaveLength(1); 

});

test('Recherche de voitures par marque', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Toyota', 'Camry');
  car.addCar('Honda', 'Accord');

  const toyotaCars = car.searchCar('Toyota');

  expect(toyotaCars).toContainEqual({ brand: 'Toyota', model: 'Corolla' });
  expect(toyotaCars).toContainEqual({ brand: 'Toyota', model: 'Camry' });
  expect(toyotaCars).toHaveLength(2); 
});

