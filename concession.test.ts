import { test, expect } from 'vitest';
import { Concession } from './concession'; 

test('Affichage de la liste des marques sans doublons', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Toyota', 'Camry');
  concession.addCar('Honda', 'Accord');

  const uniqueBrands = concession.getUniqueBrands();

  expect(uniqueBrands).toContain('Toyota');
  expect(uniqueBrands).toContain('Honda');
  expect(uniqueBrands).toHaveLength(2); 
});

test('Affichage de la liste des voitures', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Honda', 'Civic');

  const cars = concession.getAllCars();

  expect(cars).toContainEqual({ brand: 'Toyota', model: 'Corolla' });
  expect(cars).toContainEqual({ brand: 'Honda', model: 'Civic' });
  expect(cars).toHaveLength(2); 
});

test('Suppression d\'une voiture', async () => {
  const concession = new Concession();
  concession.addCar('Toyota', 'Corolla');
  concession.addCar('Honda', 'Civic');
  const carToRemove = { brand: 'Toyota', model: 'Corolla' };

  concession.removeCar(carToRemove);

  const cars = concession.getAllCars();
  expect(cars).not.toContainEqual(carToRemove);
});
