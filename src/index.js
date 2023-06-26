
const name = () =>{
    console.log(this);
} 
const obj = {
    name:'evanzhe',
    age:28
}
const obj2 = {
    addr:'eemo'
}
obj2 = Object.create(obj)
console.log(obj2);