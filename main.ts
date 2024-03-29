import * as readline from "readline";
import { Concession } from "./concession";

function displayMenu(): void {
  console.log("=== Menu ===");
  console.log("1. Afficher la liste des marques");
  console.log("2. Afficher la liste des voitures");
  console.log("3. Ajouter une voiture");
  console.log("4. Supprimer une voiture");
  console.log("0. Quitter");
}

async function handleChoice(
  selection: string,
  concession: Concession,
  rl: readline.Interface
): Promise<void> {

  switch (selection) {
    case "1":
      const marques = concession.getUniqueBrands();
      console.log("Liste des marques:");
      marques.forEach((marque) => console.log(marque));
      break;
    case "2":
      const voitures = concession.getAllCars();
      console.log("Liste des voitures:");
      voitures.forEach((voiture) =>
        console.log(`${voiture.brand} - ${voiture.model}`)
      );
      break;
    case "3":
        const brand = await askQuestion(rl, "Entrez la marque de la voiture à ajouter: ");
        const model = await askQuestion(rl, "Entrez le modèle de la voiture à ajouter: ");
        concession.addCar(brand, model);
        console.log("Voiture ajoutée avec succès.");
      break;
    case "4":
        const brandToDelete = await askQuestion(rl, "Entrez la marque de la voiture à supprimer: ");
        const modelToDelete = await askQuestion(rl, "Entrez le modèle de la voiture à supprimer: ");
        concession.removeCar({ brand: brandToDelete, model: modelToDelete });
        console.log("Voiture supprimée avec succès.");
      break;
    case "0":
      console.log("Au revoir!");
      process.exit(0);
      break;
    default:
      console.log("Choix invalide.");
      break;
  }
}

function askQuestion(rl: readline.Interface, question: string): Promise<string> {
    return new Promise<string>((resolve) => {
      rl.question(question, (answer) => {
        resolve(answer);
      });
    });
  }
  

async function main() {
  const concession = new Concession();
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  while (true) {
    displayMenu();
    const selection = await new Promise<string>((resolve) =>
      rl.question("Sélectionnez une option: ", resolve)
    );
    await handleChoice(selection, concession,rl);
  }
}

main().catch((error) => console.error(error));
