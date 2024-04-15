import { test, expect } from 'vitest';
import { Concession } from './concession'; 

test('Affichage de la liste des marques sans doublons', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Toyota', 'Camry');
  concession.addCar('Honda', 'Accord');

  const uniqueBrands = concession.getUniqueBrands();

 expect(uniqueBrands).toEqual((['Toyota', 'Honda']));

});

test('Affichage de la liste des voitures', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Honda', 'Civic');

  const cars = concession.getAllCars();

  expect(cars).toEqual([
    { brand: 'Toyota', model: 'Corolla' },
    { brand: 'Honda', model: 'Civic' }
  ]);
});

test('Suppression d\'une voiture', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Honda', 'Civic');
  const carToRemove = { brand: 'Toyota', model: 'Corolla' };

  concession.removeCar(carToRemove);

  const cars = concession.getAllCars();

  expect(cars).toEqual([
    { brand: 'Honda', model: 'Civic' }
  ]);

});
