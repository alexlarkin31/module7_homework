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