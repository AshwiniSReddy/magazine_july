const abc={
    name:'Ashwini',
    [Symbol("id")]:123,
    [Symbol("id")]:346

}


const secret=Symbol("avg");

const agh={
    name:"asheini",
    age:"233",
    [secret]:"hidden info"
}

console.log(agh)


for(let key in agh){
    console.log(key)
}

console.log(Object.keys(agh))

console.log(agh[secret])

greet();
function greet(){
    console.log("hello")
}

const original = [1, 2, 3,[4,5]];
const copy = [...original];

console.log(copy); // [1, 2, 3]
let x=[1,2]
let y=[3,4]
let z=[...x,...y]
console.log(z)



function qwe(x){
    console.log(x)
}

qwe(...z)


let obj1={
    a:1,
    b:2
}

let obj2={
    c:1,
    d:2
}

let obj3={
    ...obj1,...obj2
}

console.log(obj3)


let word="hello"

let modified=[...word]

console.log(modified);

const [first,...rest]=[1,2,3,4]
console.log(first)
console.log(rest)


let numbers=[1,2,3,4]

const [a,b,c,d]=numbers
console.log(a,b,c,d)

const colors=["red","blue","yellow"]

const [fst, ,third]=colors;

console.log(fst,third)


let name=1
let school=2

let [name1,school1]=[school,name]
console.log(name1,school1)

let arr=[1]
let [f=2,g=2]=arr

console.log(f,g)

let map=new Map()
map.set("name","ashwini");

map.set(42,"the answer");
map.set(true,"answer")

console.log([...map.keys()])

console.log(map.size)

for(const [key,value] of map){
    console.log(key,value)
}

for(const key of map.keys()){
    console.log(key)
}

for(const value of map.values()){
    console.log(value)
}


const set =new Set([1,2,34,4])
console.log(set)

const numbers1 = [1, 2, 2, 3, 4, 4, 5];

const uniqueNumbers = [...new Set(numbers1)];

console.log(uniqueNumbers); // [1, 2, 3, 4, 5]
