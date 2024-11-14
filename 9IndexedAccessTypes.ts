// Indexed Access Types 索引访问类型  

type Person3 = { age: number; name: string; alive: boolean };

type Age = Person3["age"];

type I1 = Person3["age" | "name"];
     
// type I1 = string | number
 
type I2 = Person3[keyof Person3];
     
// type I2 = string | number | boolean
 
type AliveOrName = "alive" | "name";

type I3 = Person3[AliveOrName];
     
// type I3 = string | boolean


const MyArray = [
    { name: "Alice", age: 15 },
    { name: "Alice", age: 15 },
    { name: "Bob", age: 23 },
    { name: "Eve", age: 38 },
  ];
   
  type Person4 = typeof MyArray[number];
         
//   type Person4 = {
//       name: string;
//       age: number;
//   }
  type Age3 = typeof MyArray[number]["age"];
       
//   type Age3 = number

  // Or
  type Age2 = Person4["age"];
        
//   type Age2 = number

export {};