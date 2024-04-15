import { User } from '../user';
import { test, expect } from 'vitest';

test('Inscription d\'un utilisateur', async () => {
    const user = new User('John', 'password');
    user.register({ name: 'John', password: 'password' });
    const userList = user.getUserList();
    expect(userList).toContainEqual({ name: 'John', password: expect.any(String), isCarDealer: false });
});

test('Connexion d\'un utilisateur', async () => {
    const user = new User('John', 'password');
    user.register({ name: 'John', password: 'password' });
    const connection = user.connectUser('John', 'password');
    expect(connection).toBe('Connected');
});

test('Connexion d\'un utilisateur avec mauvais mot de passe', async () => {
    const user = new User('John', 'password');
    user.register({ name: 'John', password: 'password' });
    const connection = user.connectUser('John', 'wrongPassword');
    expect(connection).toBe('Wrong password');
});

test('Recherche d\'un utilisateur', async () => {
  // recherche d'un utilisateur comme une bar de recherche
    const user = new User('John', 'password');
    user.register({ name: 'John', password: 'password' });
    const searchedUser = user.searchUser('John');
    expect(searchedUser).toEqual('John');
});

test('Chiffrement du mot de passe', async () => {
    const user = new User('John', 'password');
    const encryptedPassword = user.encryptPassword('password');
    expect(encryptedPassword).not.toBe('password');
});

test('Définition d\'un utilisateur comme concessionnaire', async () => {
    const user = new User('John', 'password');
    user.setCarDealer();
    expect(user).toHaveProperty('isCarDealer', true);
});