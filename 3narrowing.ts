function padLeft(padding:number|string,input:string):string{
    if(typeof padding==='number'){
        return ' '.repeat(padding)+input
    }   
    return padding+input
}

function printAll(strs:string|string[]|null){
    if(typeof strs === 'object'){
        for(const s of strs){
            console.log(s)
        }
    }else if(typeof strs === 'string'){
        console.log(strs);
    }else{

    }
}

function example(x: string | number, y: string | boolean) {
    if (x === y) {
      // TypeScript knows that x and y must be a string in the first branch.
      // We can now call any 'string' method on 'x' or 'y'.
      x.toUpperCase();
            
      y.toLowerCase();
            
    } else {
      console.log(x);
                 
      console.log(y);
                 
    }
  }
  interface Container {
    value: number | null | undefined;
  }
   
  // fuck != , support !==
  function multiplyValue(container: Container, factor: number) {
    // because !=  it remove null and undefined
    // Remove both 'null' and 'undefined' from the type.
    // undefined==null // true
    if (container.value != null) {
      console.log(container.value);
                             
      // Now we can safely multiply 'container.value'.
      container.value *= factor;
    }
  }

type Fish = { swim: () => void };
type Bird = { fly: () => void };
type Human = { swim?: () => void; fly?: () => void };
 
function move(animal: Fish | Bird) {
  if ("swim" in animal) {
    return animal.swim();
  }
 
  return animal.fly();
}
function move2(animal: Fish | Bird | Human) {
    if ("swim" in animal) {
      animal;
        
  // (parameter) animal: Fish | Human
    } else {
      animal;
        
  //(parameter) animal: Bird | Human
    }
  }
  function logValue(x: Date | string) {
    if (x instanceof Date) {
      console.log(x.toUTCString());
                 
  // (parameter) x: Date
    } else {
      console.log(x.toUpperCase());
                 
  // (parameter) x: string
    }
  }

  // Using type predicates

  function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined;
  }
  function getSmallPet():Fish|Bird{
        return Math.random()<0.5?
        {
            fly:()=>undefined
          }:
          {
            swim:()=>undefined
          }
  }
  let pet = getSmallPet()
  if (isFish(pet)) {
    pet.swim();
  } else {
    pet.fly();
  }
const zoo: (Fish | Bird)[] = [getSmallPet(), getSmallPet(), getSmallPet()];
const underWater1: Fish[] = zoo.filter(isFish);
// or, equivalently
const underWater2: Fish[] = zoo.filter(isFish) as Fish[];
 
// The predicate may need repeating for more complex examples
const underWater3: Fish[] = zoo.filter((pet): pet is Fish => {
  if (pet.name === "sharkey") return false;
  return isFish(pet);
});
export {};