
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