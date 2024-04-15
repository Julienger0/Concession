import { test, expect } from 'vitest';
import { Cars } from '../cars'; 

test('Affichage de la liste des marques sans doublons', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Toyota', 'Camry');
  car.addCar('Honda', 'Accord');

  const uniqueBrands = car.getUniqueBrands();

  expect(uniqueBrands).toEqual(['Toyota', 'Honda']);
});

test('Affichage de la liste des voitures', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Honda', 'Civic');

  const cars = car.getAllCars();

  expect(cars).toEqual([
    { brand: 'Toyota', model: 'Corolla' },
    { brand: 'Honda', model: 'Civic' }
  ]);
});

test('Suppression d\'une voiture', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Honda', 'Civic');
  const carToRemove = { brand: 'Toyota', model: 'Corolla' };

  car.removeCar(carToRemove);
  const cars = car.getAllCars();
  expect(cars).toEqual([
    { brand: 'Honda', model: 'Civic' }
  ]);

});

test('Recherche de voitures par marque', async () => {
  const car = new Cars();
  car.addCar('Toyota', 'Corolla');
  car.addCar('Toyota', 'Camry');
  car.addCar('Honda', 'Accord');

  const toyotaCars = car.searchCar('Toyota');


  expect(toyotaCars).toEqual([
    { brand: 'Toyota', model: 'Corolla' },
    { brand: 'Toyota', model: 'Camry' }
  ]);
});



