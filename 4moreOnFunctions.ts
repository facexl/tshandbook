// 1.同时声明属性和调用(调用签名)  Call Signatures

type Fn = {
    na:'xiaolang';
    (someArg:number):boolean
}
function test(a:Fn){
    console.log(a.na)
    a(1)
}
// Note that the syntax is slightly different compared to a function type expression - use : between the parameter list and the return type rather than =>.
type Fn2 = ()=>boolean

// 2.Construct Signatures 构造签名  

type SomeConstructor = {
    new (s: string): SomeObj;
};

interface CallOrConstruct {
    new (s: string): Date;
    (n?: number): number;
}


// function fn(ctor: SomeConstructor) {
//     return new ctor("hello");
// }

// 3.Generic Functions

function Generic<Type>(arr:Type[]):Type|undefined{
    return arr[0]
}

function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
    return arr.map(func);
  }

  // 4.Constraints 类型约束  
  // Parameter 'n' is of type 'string'
  // 'parsed' is of type 'number[]'
  const parsed = map(["1", "2", "3"], (n) => parseInt(n));

  function longest<Type extends { length: number }>(a: Type, b: Type) {
    if (a.length >= b.length) {
      return a;
    } else {
      return b;
    }
  }
   
  // longerArray is of type 'number[]'
  const longerArray = longest([1, 2], [1, 2, 3]);
  // longerString is of type 'alice' | 'bob'
  const longerString = longest("alice", "bob");
  // Error! Numbers don't have a 'length' property
  const notOK = longest(10, 100);

  function minimumLength<Type extends { length: number }>(
    obj: Type,
    minimum: number
  ): Type {
    if (obj.length >= minimum) {
      return obj;
    } else {
      return { length:number }
    //   {
    //     ...obj,
    //     length:minimum
    //   }
    }
  }
  // 5.Specifying Type Arguments  

  function combine<Type>(arr1: Type[], arr2: Type[]): Type[] {
    return arr1.concat(arr2);
  }

  const arr1 = combine([1, 2, 3], ["hello"]);

  const arr2 = combine<string | number>([1, 2, 3], ["hello"]);

  // 6.Function Overloads

function makeDate(timestamp: number): Date; // overload signatures.
function makeDate(m: number, d: number, y: number): Date; // overload signatures.
function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {  // 兼容签名
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d);
  } else {
    return new Date(mOrTimestamp);
  }
}
const d1 = makeDate(12345678);
const d2 = makeDate(5, 5, 5);
const d3 = makeDate(1, 3); // Even though we wrote a function with two optional parameters after the required one, it can’t be called with two parameters!


const user = {
    id: 123,
   
    admin: false,
    becomeAdmin: function () {
      this.admin = true;
    },
  };

  // TypeScript does not assume that arrays are immutable
const args = [8, 5];
const angle = Math.atan2(...args);

const args2 = [8, 5] as const
const angle2 = Math.atan2(...args2);

export {};