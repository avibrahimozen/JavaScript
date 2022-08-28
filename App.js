// Değişkenler VE VERİ TİPLARİ

// değişken oluşturulurken const ve let keywordu kullanılır. constlar sınradan değişmez ama letler değişir let te en son verilen kullanılırken const ta hata verir const tektir değiştirilemez :D

let numberValue = 5;
let numberValue2 = 10;

let numberValue3 = 31;

numberValue = 45

city = "Antalya";

// string ve number

let number = 10;
let y = 20.56;
let x = 0.6;

let name = "İbrahim";

let surname = "ÖZEN";

let theKing = "Süha";

// array

let cities = ["Ankara", "İstanbul", "Antalya"];
let cars = ["lamborgini", "Porsche", "Maserati"];

cities.push("ankara", "antalya");

// Objects

let person = {
  name: "İbrahim",
  surname: "Özen",
  job: "Lawyer",
  age: "29",
};

// fonksiyonlar

const add = (number1, number2) => {
  last = number1 + number2;
  console.log(last);
};

add(2, 8);

// test

//FONKSİYONLAR

const fuck = (name, surname, age, job) => {
  let person = {
    name: name,
    surname: surname,
    age: age,
    job: job,
  };

  return person;
};





let val = fuck("İbrahim", "Özen", 29,"Lavyer")

let val2 = fuck("Süha", "ARIKAN", 29,"Lavyer")

console.log(val2)