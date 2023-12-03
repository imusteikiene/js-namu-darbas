// PRAKTIKA SU JS KLASĖMIS

// 1 UŽDUOTIS

// Naudojant ES5 sintakse sukurkite objekto Filmas (Movie) objekto konstruktoriu, kuris turės šias savybes: name, year, director, budget, income ir pridėkite prototype metodus:
// * getIntroduction(), kuris grąžins filmo pilną pavadinimą (su name, year, director);
// * getProfit(), kuris grąžins sumą, kurią uždirbo (pelną) filmas.


// 2.1 UŽDUOTIS

// Naudojant ES6 klases sukurkite automobilių objektų kūrimo konstruktorių (Car), kuris turės šias savybes: marke, model, year
// ir metodus:

// * getIntroduction(), kuris grąžins pilną pavadinimą (su marke ir model).
// * getAge(), kuris gražins “10 metų arba naujesnis”, jei automobilio amžius yra 10 metų arba naujesnis arba “11 metų arba senesnis”, jei automobilio amžius yra 11 metų arba senesnis (šio metodo logikai naudokite ternary operatorių ir Date() metodą).

// 2.2 UŽDUOTIS

// Naudojant ES6 subklases sukurkite motociklų objektų kūrimo konstruktorių (Motorcycle), kuris turės visas automobilių objektų kūrimo konstruktorių (Car) savybes ir metodus ir papildomai šią savybę: wheels (kurio vertė bus number) ir metodą. Ir metodą: 

// * getWheelsNumber(), kuris grąžins “motociklas turi tris ratus”, jei wheels vertė bus 3 ir “motociklas turi du ratus”, jei wheels vertė bus 2 (šio metodo logikai naudokite else if operatorių arba switch).

// Testavimui, sukurkite du objektus, kurie turės nurodytas savybes ir metodus.



// pirma uzduotis

function Movie(name, year, director, budget, income){
    this.name = name
    this.year = year
    this.director = director
    this.budget = budget
    this.income = income

}
Movie.prototype.getInsroduction = function(){
  return this.name + ' (' + this.year + ') - Directed by ' + this.director;
};
Movie.prototype.getProfit = function(){
    return this.income - this.budget
};
const mintiesLabirintas = new Movie(`Minties labirintas`, 2022, `Aldona Rezisiere`, 8000000, 12000000);

console.log(mintiesLabirintas.getInsroduction());
console.log(mintiesLabirintas.getProfit())

// 2.1 uzduotis

class Car {
    constructor(marke, model, year) {
        this.marke = marke;
        this.model = model;
        this.year = year;
    }

    getIntroduction() {
        return `${this.marke} ${this.model}`;
    }

    getAge() {
        const currentYear = new Date().getFullYear();
        const age = currentYear - this.year;

        return age >= 10 ? '10 metų arba naujesnis' : '11 metų arba senesnis';
    }
}

const bmwCar = new Car('BMW', 'X5', 2018);
const audiCar = new Car('Audi', 'A4', 2015);
const mercedesCar = new Car('Mercedes', 'E-Class', 2020);


console.log(bmwCar.getIntroduction());
console.log(bmwCar.getAge()); 

console.log(audiCar.getIntroduction());
console.log(audiCar.getAge()); 
console.log(mercedesCar.getIntroduction());
console.log(mercedesCar.getAge());



// 2.2uzduotis

class Motorcycle extends Car {
    constructor(brand, model, year, wheels) {
        super(brand, model, year);
        this.wheels = wheels;
    }

    getWheelsNumber() {
        if (this.wheels === 3) {
            return 'motociklas turi tris ratus';
        } else if (this.wheels === 2) {
            return 'motociklas turi du ratus';
        } else {
            return 'Netipinis motociklas';
        }
    }
}

// Testuokime klases

const motorcycleWithThreeWheels = new Motorcycle('Harley-Davidson', 'Street Glide', 2021, 3);
const motorcycleWithTwoWheels = new Motorcycle('Yamaha', 'YZF R6', 2019, 2);

// Testavimo metodai
console.log(motorcycleWithThreeWheels.getIntroduction());
console.log(motorcycleWithThreeWheels.getAge());
console.log(motorcycleWithThreeWheels.getWheelsNumber());

console.log(motorcycleWithTwoWheels.getIntroduction()); 
console.log(motorcycleWithTwoWheels.getAge()); 
console.log(motorcycleWithTwoWheels.getWheelsNumber()); 