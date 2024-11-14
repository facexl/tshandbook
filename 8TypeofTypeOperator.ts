let s = "hello";
let n: typeof s;
// let n: string

function f() {
    return { x: 10, y: 3 };
}

type P2 = ReturnType<typeof f>;
export {};