type Point3 = { x: number; y: number };

type P = keyof Point3;

const a3:P = 'y'

// If the type has a string or number index signature, keyof will return those types instead:

type Arrayish = { [n: number]: unknown };
type A = keyof Arrayish;
    
// type A = number
 
type Mapish = { [k: string]: boolean };
type M = keyof Mapish;
    
// type M = string | number

// Note that in this example, M is string | number — this is because JavaScript object keys are always coerced to a string, so obj[0] is always the same as obj["0"].

// keyof types become especially useful when combined with mapped types, which we’ll learn more about later.

export {};
