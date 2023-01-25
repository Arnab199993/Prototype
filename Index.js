//What is Prototype in js?
//Ans:Prototypes are the mechanism by which JavaScript objects inherit features from one another.

const arr=["Akshay","Aditya"]
//   let obj={
//   name:"Arnab",
//   city:"Dehradun",
//   Getintro:function(){
//     return (this.name+" "+"from"+" "+this.city)
//   }
// }
// console.log(obj.Getintro())



arr.__proto__.__proto__.__proto__ //Null
//This is called prototype chaining

//Protype Chaining
//The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype. 


const grandparent={
  name:"shyamlaal",
  land:"2 acres land",
  getland:function(){
    return this.land
  }
}
console.log(`The name is ${grandparent.name}`)
const father=Object.create(grandparent); //main syntax to reach to an object
father.name="Mohan" //updating value
console.log(father) //this will return the whole object
console.log(father.name);
father.getland=function(){
  return this.land+" "+"2 acres more"
}
console.log(father.land);
father.land="8 acres"
console.log(father.getland())