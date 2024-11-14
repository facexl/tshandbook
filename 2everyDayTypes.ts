// 1.最好使用小写 The type names String, Number, and Boolean (starting with capital letters) are legal, but refer to some special built-in types that will very rarely appear in your code. Always use string, number, or boolean for types.

// 2.Arrays:
let a:number[] = [1,2,3]
let b:Array<number> = [1,2,3]

// 3.any:

// 4.Functions:

// Parameter type annotation
function greet(name: string) {
    console.log("Hello, " + name.toUpperCase() + "!!");
}

// Return type annotations
function getFavoriteNumber(): number {
    return 26;
}

// Anonymous Functions
// No type annotations here, but TypeScript can spot the bug
const names = ["Alice", "Bob", "Eve"];
// Contextual typing for function
names.forEach(function (s) {
  console.log(s.toUpperCase());
});

// 5.Object Types  

// 属性之间 ;或, 都可以
function z(obj:{x:number;y:number}){
    return obj.x+obj.y
}
// ?
function printName(obj: { first: string; last?: string }) {
    // Error - might crash if 'obj.last' wasn't provided!
    console.log(obj.last.toUpperCase());
    // Object is possibly 'undefined'.
    if (obj.last !== undefined) {
      // OK
      console.log(obj.last.toUpperCase());
    }
   
    // A safe alternative using modern JavaScript syntax:
    console.log(obj.last?.toUpperCase());
}

// 6.Union Types

function printId(id: number | string) {
    console.log("Your ID is: " + id);
  }
  // OK
  printId(101);
  // OK
  printId("202");
  // Error
  printId({ myID: 22342 });

// 7.Type Aliases

type Point = {
    x: number;
    y: number;
};

type ID = number | string;

// 8.Interfaces 
// An interface declaration is another way to name an object type:
interface Point2 {
    x: number;
    y: number;
}

// Differences Between Type Aliases and Interfaces:

// Interface 可以扩展  type 不行  

interface Animal {
    name: string
}
interface Bear extends Animal {
    honey: boolean
}
  
interface Win {
    title: string
  }
  
  interface Win {
    ts: number
  }

const e:Win = {
    title:'1',
    ts:1
}
type Win2 = {
    title: string
  }
  
type Win2 = {
    ts: number
}

// 9.Type Assertions

const myCanvas = document.getElementById("main_canvas") as HTMLCanvasElement;
// You can also use the angle-bracket syntax (except if the code is in a .tsx file), which is equivalent:
const myCanvas2 = <HTMLCanvasElement>document.getElementById("main_canvas");

const x = "hello" as unknown as number;

// 10.Literal Types  

let x2: "hello" = "hello";
// OK
x2 = "hello";
// ...
x2 = "howdy";

function printText(s: string, alignment: "left" | "right" | "center") {
    // ...
}
printText("Hello, world", "left");
printText("G'day, mate", "centre");

// Literal Inference

const req = { url: "https://example.com", method: "GET" };

function handleRequest(url:string,method:"GET" | "POST"){}

handleRequest(req.url,req.method) // 类型“string”的参数不能赋给类型“"GET" | "POST"”的参数

handleRequest(req.url,req.method as "GET") // 类型“string”的参数不能赋给类型“"GET" | "POST"”的参数

// or You can use as const to convert the entire object to be type literals:

const req2 = { url: "https://example.com", method: "GET" } as const

handleRequest(req2.url,req2.method)

// 11.null and undefined  

// With strictNullChecks off, values that might be null or undefined can still be accessed normally, and the values null and undefined can be assigned to a property of any type. This is similar to how languages without null checks (e.g. C#, Java) behave. The lack of checking for these values tends to be a major source of bugs; we always recommend people turn strictNullChecks on if it’s practical to do so in their codebase.

// Non-null Assertion Operator (Postfix!)

function liveDangerously(x?: number | null) {
    // No error
    console.log(x!.toFixed());
  }

  export {};