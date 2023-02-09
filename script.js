/*let a;
a = +prompt("Введите цифру");

if(a == 0){
    alert('Число 0');
}else if(typeof a !== 'number' || isNaN(a)){
    alert("Ошибка. Не число.");
}else{
    if(a%2 == 0){
        alert('Число '+a+' Четное');
    }else{
        alert('Число '+a+' Нечетное');
    }
}*/
/*
let b = [];
b = typeof b;
switch(b) {
    case 'number':  // if (x === 'value1')
      alert('Число '+b);
      break;
      case 'string':  // if (x === 'value2')
      alert('Строка '+b);
      break;
      case 'boolean':  // if (x === 'value2')
      alert('boolean '+b);
      break;
      default:
        alert( 'Не определен!' );
    }
  */
 /*
    const str = "map";
    const reverse = str.split('').reverse().join('');
    
    alert(reverse);
    console.log(reverse); // pam
    */
   /*
    function getRandomIntFromRange(min, max) {
        min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
        max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
        return Math.floor(Math.random() * (max - min)) + min; 
      }
      alert(getRandomIntFromRange(0,100));
      */
     /*
     let arr = ['1','r','5','y','u','7','k','l'];
     console.log(arr.length);
     let result = arr.map(function(item, index, array) {

        return item
      
      });
      console.log(result);*/
/*
      let arr = [1,2,3]

        arr.forEach(function(item, index, array) {

   console.log(item)

});
*/
/*
let arr = [1,2,3,4,5,'r','r'];
  const findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !== index)
  const duplicates = findDuplicates(arr);
  console.log(duplicates.length === 0?false:true);
  */

  /*
let arr = [1,2,3,4,5,6,7,8,5,34,'r','u',[],0,null];
let nol=0;
let chet=0;
let nechet=0;
let nechislo=0; 
 arr.forEach(function(item, index){
   
        



    if(item === 0){
        ++nol;
       // console.log('Число 0.');
    }else if(typeof item !== 'number' || isNaN(item)){
            ++nechislo;
        //console.log("Ошибка. Не число. "+item);
    }else{
        if(item%2 == 0){
          //  console.log('Число '+item+' Четное');
            ++chet;
        }else{
            //console.log('Число '+item+' Нечетное');
            ++nechet;
            }       
                
         }
});
                console.log("Количество четных: " + chet);
                console.log("Количество нечетных: " + nechet);
                console.log("Количество нулей: " + nol);
                */

/*
                let carName = 'Porsche';
                let carPrice = 1000000;
                function getCarPrice(strings, carNameExp, carPriceExp) {
                    let str0 = strings[0]; // "This car is " 
                    let str1 = strings[1]; // " and it is "
                    let carPriceText = carPriceExp > 50000 ? 'expensive' : 'cheap'
                    return `${str0}${carNameExp}${str1}${carPriceText}`;
                }
                let result = getCarPrice`This car is ${carName} and it is ${carPrice}`;
                console.log(result); // "This car is Porsche and it is expensive"
*/
/*
                map = new Map();
                map.set(1, true);
                map.set("h", "H");
                map.set("car", "jeep");
                map.set("5", 5);
                map.set(false, "bool");
                //console.log(map.entries());
                for (let index of map.keys()) {
                    console.log(index+" - "+map.get(index)); // огурец, помидор, лук
                  }
                  *//*
                 function chetNechetNol(){
                  let arr = [1,2,3,4,5,6,7,8,5,34,'r','u',[],0,null];
let nol=0;
let chet=0;
let nechet=0;
let nechislo=0; 
 arr.forEach(function(item, index){
   
        



    if(item === 0){
        ++nol;
       // console.log('Число 0.');
    }else if(typeof item !== 'number' || isNaN(item)){
            ++nechislo;
        //console.log("Ошибка. Не число. "+item);
    }else{
        if(item%2 == 0){
          //  console.log('Число '+item+' Четное');
            ++chet;
        }else{
            //console.log('Число '+item+' Нечетное');
            ++nechet;
            }       
                
         }
});
                console.log("Количество четных: " + chet);
                console.log("Количество нечетных: " + nechet);
                console.log("Количество нулей: " + nol);
              return   "Количество четных: " + chet + "Количество нечетных: " + nechet + "Количество нулей: " + nol;
              }

              chetNechetNol();

    */ /*       function prostoeChislo(item){
                let val
                  if( val=(item === 0 || item ===1)?"Число " + item:(item>1000?"Данные неверны":raschet(item)))
                    return val;
              }
              function raschet(n){
                
                if(n === 2)  {
                  return n;
                } else {
                  for(let x = 2; x < n; x++)  {
                    if(n % x === 0) {
                      return n+" не простое";
                      //console.log("dd");
                    }
                  }
                  return n +" Простое";  
                }
                }
              
              console.log(prostoeChislo(10));*/

              /*function func1(int){
                 
                funct2 = function(b){
              
                  return int+b;
                }
                return funct2(1);
              }
              console.log(func1(1));*/
  
              /*function printNumbers(from, to) {
                let current = from;
              
                let timerId = setInterval(function() {
                  console.log(current);
                  if (current == to) {
                    clearInterval(timerId);
                  }
                  current++;
                }, 1000);
              }
              
              // использование:
              printNumbers(5, 15);*/
             /* const fatBodyArrowFunction = (a, b) => {
                let ta=a;
                let tb =b;
                for(let i=1; i !== tb; i++){
                  ta*=ta;
                }
                const result = ta;
              
                return result;
              
              };
              console.log(fatBodyArrowFunction(5,2));*/
              const obj1 = {a: 1};
/*
const obj2 = obj1;

obj1 === obj2; // true

obj1.b = 2;

obj1 === obj2; // true
console.log(obj2);
const obj = {
myProp: 100,1: 200,
};
console.log(key = 'myProp');
console.log(obj.myProp);
console.log(obj['myProp']); // 100
console.log(obj[1]); // 200
console.log(obj[key]); // 100
console.log("Ghbdtn");*/



obj={city: "Moscow",
    t:'t',
    3:'2+1'};

function objProperty(obj){
  if (typeof obj !== "object")
    return
  for(let key in obj)
    if(obj.hasOwnProperty(key)){
      console.log(key+":"+obj[key]);
    }
}
objProperty(obj);

function proverkaNaSvoistva(obj, val){
  console.log(val+="");
  if(typeof obj !== "object"){
    console.log("if1");
    return "объект, строка";
  }
  if(obj.hasOwnProperty(val)){
    console.log(val);
     return true;
  }else{
    console.log(val+"тут");
     return false;
  } 


}
let r=";"
obj={city: "Moscow",
    t:'t',
    3:'2+1'};
    let xy="";
    proverkaNaSvoistva(obj, "t");

const emptyObj = Object.create(null);


const user ={
  name: 'Ivan',
  getName: function(){
    console.log(this.name)
  }
  
}
user.getName();
/*
var Track = function (params) {
  //console.log(typeof params);
  this.name = params.name;
  this.url = params.url;

 // this.playTrack = function () {
 // console.log('We started playing');
 //  console.log('We started playing', this);
 // }
  
}

Track.prototype.playTrack = function () {
  console.log('We started playing', this.name);
}

var track01 = new Track({
  name: 'track01',
  url: 'track01.mp3'
});

var track02 = new Track({
  name: 'track02',
  url: 'track02.mp3'
});
//console.log(track01);
//console.log(track02);
//track01.playTrack();

var YoutubeTrack = function (params) {
  Track.apply(this, arguments);
  this.image = params.image;
};
YoutubeTrack.prototype = Object.create(Track.prototype);
var youtubeTrack01 = new YoutubeTrack({
    name: 'youtubeTrack01',
    url: 'youtubeTrack01.mp3',
    image: 'youtubeTrack01.jpg'

});


var youtubeTrack02 = new YoutubeTrack({
    name: 'youtubeTrack02',
    url: 'youtubeTrack02.mp3',
    image: 'youtubeTrack01.jpg'

});
youtubeTrack01.playTrack();
console.log(youtubeTrack01);
console.log(youtubeTrack02);


console.log(YoutubeTrack.prototype = Object.create(Track.prototype));
console.log(YoutubeTrack.prototype.constructor = YoutubeTrack);
*/

let f = {

  name: "Вася",
  surname: "Петров"
};

f.static = 1000;
f.fnc = function(){
  return "t"
};
f.test = "test";

  for (var key in f){
    console.log(key+": "+ f[key]);
  }
  // только свои свойства
  const obj2 = Object.create(f);
  obj2.ch=1;
  obj2.param ="Параметр";
  obj2.k = 2;

  for (let key in obj2) {

    if (obj2.hasOwnProperty(key)) {

        console.log(key+": "+obj2[key]);
    }   
}
*/
/
let obj2 = {
  odin: "1",
  dva: "2",
  tri: "3"
};
trueName = function(chislo, obj1){
  if (chislo in obj1) {
    return true
  }else if("unfefined"){
    return false
  
}};
console.log(trueName("odin",obj2));
//////////////////////////
const emptyObj = Object.create(null)
*/

class Vkl{
  constructor(operator = false){
    this.operator = operator;
    if(this.operator != false && this.operator !=true)
      return console.log(this.operator ="true or false")
    this.operator = operator;
    
  
  
  
}};
class Lampa extends Vkl{
  constructor(operator = true){
    super(operator);
    this.param = 220;
  }
};
class Comp extends Vkl{
  constructor(operator = true){
    super(operator);
    this.esheparametr = "text";
  }
}
let Computer = new Comp();
console.log(Computer.operator,Computer.esheparametr);