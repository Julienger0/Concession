"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline");
var concession_1 = require("./concession");
function displayMenu() {
    console.log("=== Menu ===");
    console.log("1. Afficher la liste des marques");
    console.log("2. Afficher la liste des voitures");
    console.log("3. Ajouter une voiture");
    console.log("4. Supprimer une voiture");
    console.log("0. Quitter");
}
function handleChoice(selection, concession, rl) {
    return __awaiter(this, void 0, void 0, function () {
        var _a, marques, voitures, brand, model, brandToDelete, modelToDelete;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = selection;
                    switch (_a) {
                        case "1": return [3 /*break*/, 1];
                        case "2": return [3 /*break*/, 2];
                        case "3": return [3 /*break*/, 3];
                        case "4": return [3 /*break*/, 6];
                        case "0": return [3 /*break*/, 9];
                    }
                    return [3 /*break*/, 10];
                case 1:
                    marques = concession.getUniqueBrands();
                    console.log("Liste des marques:");
                    marques.forEach(function (marque) { return console.log(marque); });
                    return [3 /*break*/, 11];
                case 2:
                    voitures = concession.getAllCars();
                    console.log("Liste des voitures:");
                    voitures.forEach(function (voiture) {
                        return console.log("".concat(voiture.brand, " - ").concat(voiture.model));
                    });
                    return [3 /*break*/, 11];
                case 3: return [4 /*yield*/, askQuestion(rl, "Entrez la marque de la voiture à ajouter: ")];
                case 4:
                    brand = _b.sent();
                    return [4 /*yield*/, askQuestion(rl, "Entrez le modèle de la voiture à ajouter: ")];
                case 5:
                    model = _b.sent();
                    concession.addCar(brand, model);
                    console.log("Voiture ajoutée avec succès.");
                    return [3 /*break*/, 11];
                case 6: return [4 /*yield*/, askQuestion(rl, "Entrez la marque de la voiture à supprimer: ")];
                case 7:
                    brandToDelete = _b.sent();
                    return [4 /*yield*/, askQuestion(rl, "Entrez le modèle de la voiture à supprimer: ")];
                case 8:
                    modelToDelete = _b.sent();
                    concession.removeCar({ brand: brandToDelete, model: modelToDelete });
                    console.log("Voiture supprimée avec succès.");
                    return [3 /*break*/, 11];
                case 9:
                    console.log("Au revoir!");
                    process.exit(0);
                    return [3 /*break*/, 11];
                case 10:
                    console.log("Choix invalide.");
                    return [3 /*break*/, 11];
                case 11: return [2 /*return*/];
            }
        });
    });
}
function askQuestion(rl, question) {
    return new Promise(function (resolve) {
        rl.question(question, function (answer) {
            resolve(answer);
        });
    });
}
function main() {
    return __awaiter(this, void 0, void 0, function () {
        var concession, rl, selection;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    concession = new concession_1.Concession();
                    rl = readline.createInterface({
                        input: process.stdin,
                        output: process.stdout,
                    });
                    _a.label = 1;
                case 1:
                    if (!true) return [3 /*break*/, 4];
                    displayMenu();
                    return [4 /*yield*/, new Promise(function (resolve) {
                            return rl.question("Sélectionnez une option: ", resolve);
                        })];
                case 2:
                    selection = _a.sent();
                    return [4 /*yield*/, handleChoice(selection, concession, rl)];
                case 3:
                    _a.sent();
                    return [3 /*break*/, 1];
                case 4: return [2 /*return*/];
            }
        });
    });
}
main().catch(function (error) { return console.error(error); });
