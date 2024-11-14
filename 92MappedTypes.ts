type OptionsFlags<Type> = {
    [Property in keyof Type]: boolean;
};

type FeatureFlags = {
    darkMode: () => void;
    newUserProfile: () => void;
  };
   
type FeatureOptions = OptionsFlags<FeatureFlags>;


// during mapping:
// -readonly 去除 readonly
// -? 去除 ?
type CreateMutable<T> = {
    -readonly[key in keyof T]-?:T[key]
}

type CreateMutableTest = {
    readonly go:string,
    go2?:boolean,
    readonly go3?:string,
}

type CreateMutableTestTest = CreateMutable<CreateMutableTest>

// Key Remapping via as  

// type MappedTypeWithNewProperties<Type> = {
//     [Properties in keyof Type as NewKeyType]: Type[Properties]
// }

type Getters<Type> = {
    [Property in keyof Type as `get${Capitalize<string & Property>}`]: () => Type[Property]
};
interface Personn1 {
    name: string;
    age: number;
    location: string;
}
 
type LazyPerson = Getters<Personn1>;

// Remove the 'kind' property
type RemoveKindField<Type> = {
    [Property in keyof Type as Exclude<Property, "kind">]: Type[Property]
};
 
interface Circle {
    kind: "circle";
    radius: number;
    fuck:boolean
}
 
type KindlessCircle = RemoveKindField<Circle>;

// You can map over arbitrary unions, not just unions of string | number | symbol, but unions of any type:

type EventConfig<Events extends { kind: string }> = {
    [E in Events as E["kind"]]: (event: E) => void;
}
 
type SquareEvent = { kind: "square", x: number, y: number };
type CircleEvent = { kind: "circle", radius: number };
 
type Config = EventConfig<SquareEvent | CircleEvent>

export {}