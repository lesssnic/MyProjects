

let inn = '3160511137';

let birthdayPart = +inn.slice(0, 5);

let x = 0;

for (i = 0; i < inn.length - 1; i++){

    let control = [-1, 5, 7, 9, 4, 6, 10 , 5, 7];

    x += +inn[i] * control[i];
}

let kn = (x%11)%10;

if (kn == +inn[inn.length-1]){
    console.log('Код валиден');
}else console.log('Ошибка в коде');

if (+inn[inn.length-2]%2 == 1){
    console.log('Мужчина');
}else console.log('Женщина');

let ms = birthdayPart * 86400000 - 2209075200000;

let birthday = new Date(ms);

console.log(birthday);