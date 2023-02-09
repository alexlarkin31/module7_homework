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