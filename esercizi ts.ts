//1) Quali sono i tipi primitivi principali in TypeScript?
//I tipi primitivi principali in TypeScript sono:

//string: rappresenta le stringhe.
//number: rappresenta i numeri (interi e decimali).
//boolean: rappresenta valori vero/falso.
//null: rappresenta l'assenza di valore.
//undefined: rappresenta una variabile dichiarata ma non inizializzata.
//bigint: rappresenta numeri interi molto grandi.
//symbol: rappresenta un identificatore unico.

//2) Crea tre variabili tipizzate:

const name: string = "Mario";
const age: number = 25;
const isStudyingTypeScript: boolean = true;

//3) Tipizza il parametro della funzione greet:

const greet = (name: string): string => { 
  return "Ciao " + name; 
};

//4) Specifica il tipo di ritorno della funzione sum:

const sum = (a: number, b: number): number => { 
  return a + b; 
};

//5) Funzione che accetta un prezzo e restituisce il prezzo con IVA:

const calculatePriceWithVAT = (price: number): number => {
  return price * 1.22;
};

//6) Funzione che concatena due stringhe e restituisce la lunghezza totale:

const concatenateAndGetLength = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

//7) Cos'è un Type Union e come si scrive?
let value: string | number;
value = "Hello"; 
value = 42; 

//8) Variabile che può contenere un numero, null o undefined:
let flexibleValue: number | null | undefined;

//9) Tipo per rappresentare i giorni della settimana usando union di stringhe letterali:
type DayOfWeek = "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday";

//10) Tipizza l'array di numeri nei due modi possibili:
const numbers: number[] = [1, 2, 3]; // Sintassi più comune
const numbersAlt: Array<number> = [1, 2, 3]; // Alternativa

//11) Tupla per un array di 5 elementi:
const tuple: [string, string, string, number, number] = ["a", "b", "c", 1, 2];

//12) Differenza tra type e interface:
//Differenze principali:

//Le interface possono essere estese e implementate nelle classi, mentre i type no.
//I type possono rappresentare union e tipi complessi, mentre le interface no.

//13) Interfaccia per un oggetto con firstname, lastname e age:
interface Person {
    firstname: string;
    lastname: string;
    age: number;
  }

//14) Interfaccia per un utente con email obbligatoria e telefono opzionale:
const students: { name: string; grade: number }[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
  ];

//15) Array tipizzato di oggetti "Studente" con nome e voto:
const students: { name: string; grade: number }[] = [
    { name: "Alice", grade: 90 },
    { name: "Bob", grade: 85 },
  ];

//16) Interfaccia base "Veicolo" e "Auto":
interface Vehicle {
    wheels: number;
    speed: number;
  }
  
  interface Car extends Vehicle {
    brand: string;
  }

//17) Oggetto che implementa l'interfaccia Auto:
const myCar: Car = {
    wheels: 4,
    speed: 120,
    brand: "Toyota",
  };

//18) Cosa sono i Generics in TypeScript?:
//I Generics sono una funzionalità che consente di definire componenti riutilizzabili con tipi dinamici, mantenendo il controllo sul tipo.

//19) È possibile avere più tipi generici in un'interfaccia?
//Si.

//20) Interfaccia generica per una risposta API:
interface ApiResponse<T> {
    data: T;
    success: boolean;
    error?: string;
  }
  
