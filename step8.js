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