interface SomeType{
    a:string;
    b?:number;
    readonly c:boolean;
}

// TypeScript doesn’t factor in whether properties on two types are readonly when checking whether those types are compatible, so readonly properties can also change via aliasing.
interface Person {
    name: string;
    age: number;
  }
   
  interface ReadonlyPerson {
    readonly name: string;
    readonly age: number;
  }
   
  let writablePerson: Person = {
    name: "Person McPersonface",
    age: 42,
  };
   
  // works
  let readonlyPerson: ReadonlyPerson = writablePerson;
   
  console.log(readonlyPerson.age); // prints '42'
  writablePerson.age++;
  console.log(readonlyPerson.age); // prints '43'

  // 1.Index Signatures

  interface NumberDictionary {
    [index: string]: number;
   
    length: number; // ok
    name: string;
    // Property 'name' of type 'string' is not assignable to 'string' index type 'number'.
  }
  interface ReadonlyArray2{
    readonly [index: number]: string;
  }

// 2.extends 

interface Colorful {
    color: string;
  }
   
  interface Circle {
    radius: number;
  }
   
  interface ColorfulCircle extends Colorful, Circle {
    fuck?:number
  }
   
  const cc: ColorfulCircle = {
    color: "red",
    radius: 42,
  };

// 3. Intersection Types 交叉类型  

interface Colorful {
    color: string;
  }
  interface Circle {
    radius: number;
  }
   
  type ColorfulCircle2 = Colorful & Circle;

  interface xiao{
    a:string;
    b:number
  }
  interface lang{
    b:string,
    c:number
  }
  const r:xiao & lang = {
    a:'1',
    b:1,
    c:1
  }

  // 4.Generic Object Types

  interface NumberBox {
    contents: number;
  }
   
  interface StringBox {
    contents: string;
  }
   
  interface BooleanBox {
    contents: boolean;
  }
    function setContents(box: StringBox, newContents: string): void;
    function setContents(box: NumberBox, newContents: number): void;
    function setContents(box: BooleanBox, newContents: boolean): void;
    function setContents(box: { contents: any }, newContents: any) {
        box.contents = newContents;
    }
  // use Generic Object Types:

  interface Box<Type> {
    contents: Type;
  }

  let box: Box<string>;

  function setContents2<Type>(box: Box<Type>, newContents: Type) {
    box.contents = newContents;
  }
  // using a type alias instead:
  type Box2<Type> = {
    contents: Type;
  };

  // Since type aliases, unlike interfaces, can describe more than just object types, we can also use them to write other kinds of generic helper types.

type OrNull<Type> = Type | null;
 
type OneOrMany<Type> = Type | Type[];
 
type OneOrManyOrNull<Type> = OrNull<OneOrMany<Type>>;
 
type OneOrManyOrNullStrings = OneOrManyOrNull<string>;
               
// 5.TheReadonlyArrayType 

const rea:ReadonlyArray<string> = ['']

rea.push(1)
rea[0] = '2'

const reaCopy = rea.slice(0)
reaCopy.push('1')

// when we see a function that consumes ReadonlyArrays, it tells us that we can pass any array into that function without worrying that it will change its contents.
function doStuff(values: ReadonlyArray<string>) {
   
}
// other syntax
const rea2:readonly string[] = ['']

// 6.Tuple Types 

type StringNumberPair = [string, number];

type Either2dOr3d = [number, number, number?];

type StringNumberBooleans = [string, number, ...boolean[]]; // first/second
type StringBooleansNumber = [string, ...boolean[], number]; // first/last
type BooleansStringNumber = [...boolean[], string, number]; // last/next to last

// A tuple with a rest element has no set “length” - it only has a set of well-known elements in different positions.
const a9: StringNumberBooleans = ["hello", 1];
const b9: StringNumberBooleans = ["beautiful", 2, true];
const c9: StringNumberBooleans = ["world", 3, true, false, true, false, true];

type readonlyTuple = readonly ['string']

export {};