// 1.Generic Types

function identity<T>(arg: T): T {
    return arg;
}

const output = <boolean>identity(true)

interface GenericIdentityFn {
    <Type>(arg: Type): Type;
  }
   
type GenericIdentityFn2 = <T>(arg:T)=>T

let myIdentity: GenericIdentityFn = identity;

let myIdentity2: GenericIdentityFn2 = identity;

interface GenericIdentityFn3<Type> {
    (arg: Type): Type;
}
   
let myIdentity3: GenericIdentityFn3<number> = identity;

const xxx = myIdentity2('1')

const xxx2 = myIdentity3('1')

// 2.Generic Classes

class GenericNumber<NumType> {
    zeroValue: NumType;
    add: (x: NumType, y: NumType) => NumType
}
   
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
    return x + y;
};

let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};
 
console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));

// 3.Generic Constraints

interface Lengthwise {
    length: number;
  }
   
  function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length); // Now we know it has a .length property, so no more error
    return arg;
  }

// 4.Using Type Parameters in Generic Constraints

// keyof Type => 'a'|'b'
function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
    return obj[key];
  }
   
  let x11 = { a: 1, b: 2 };
   
  getProperty(x11, "a");
  getProperty(x11, "m");

// 5.Using Class Types in Generics

class BeeKeeper {
    hasMask: boolean = true;
  }
   
  class ZooKeeper {
    nametag: string = "Mikle";
  }
   
  class Animal {
    numLegs: number = 4;
  }
   
  class Bee extends Animal {
    keeper: BeeKeeper = new BeeKeeper();
  }
   
  class Lion extends Animal {
    keeper: ZooKeeper = new ZooKeeper();
  }
   
  function createInstance<A extends Animal>(c: new () => A): A {
    return new c();
  }
   
  createInstance(Lion).keeper.nametag;
  createInstance(Bee).keeper.hasMask

  export {}; 