console.log("Hello world!");
function greet(person, date) {
    console.log("Hello " + person + ", today is " + date + "!");
}
greet("Brendan", 1);
// tsc 编译 加上 --noEmitOnError 可以避免报错 ts 文件编译到对应 js 文件  
// syntax Downleveling
// tsc --target (option must be: 'es3', 'es5', 'es6', 'es2015', 'es2016', 'es2017', 'es2018', 'es2019', 'esnext')
