interface Animal {
    live(): void;
  }
  interface Dog extends Animal {
    woof(): void;
  }
   
  type Example1 = Dog extends Animal ? number : string;

  interface IdLabel {
    id: number /* some fields */;
  }
  interface NameLabel {
    name: string /* other fields */;
  }
 
  type NameOrId<T extends number | string> = T extends number
  ? IdLabel
  : NameLabel;

  function createLabel<T extends number | string>(idOrName: T): NameOrId<T> {
    throw "unimplemented";
  }
   
  let a5 = createLabel("typescript");
     
  let b5 = createLabel(2.8);

  type Flatten<T> = T extends any[] ? T[number] : T;

  type Str = Flatten<string[]>;
     
// type Str = string
 
// Leaves the type alone.
type Num = Flatten<number>;
     
// type Num = number

// infer 
// we used the infer keyword to declaratively introduce a new generic type variable named Item instead of specifying how to retrieve the element type of T within the true branch. 
type Flatten2<Type> = Type extends Array<infer Item> ? Item : Type;

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;
 
type Num2 = GetReturnType<() => number>;
     
// type Num = number
 
type Str2 = GetReturnType<(x: string) => string>;
     
// type Str = string
 
type Bools = GetReturnType<(a: boolean, b: boolean) => boolean[]>;
      
// type Bools = boolean[]

declare function stringOrNum(x: string): number;
declare function stringOrNum(x: number): string;
declare function stringOrNum(x: string | number): string | number;
// inferences are made from the last signature
type T1 = ReturnType<typeof stringOrNum>;

// Distributive Conditional Types

type ToArray<Type> = Type extends any ? Type[] : never;
 
type StrArrOrNumArr = ToArray<string | number>;

type ToArrayNonDist<Type> = [Type] extends [any] ? Type[] : never;

type StrArrOrNumArr2 = ToArrayNonDist<string | number>;

export {};
