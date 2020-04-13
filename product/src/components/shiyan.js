function Person(name,age){
    this.name = name
    this.age = age
    console.log(789)
}
Person.prototype.say = function(){
    
}
const p1 = new Person("玩的",12)
const p2 = new Person("非凡哥",23)
console.log(p1,p2)

class animal{
    constructor(name,age){
        this.name = name
        this.age = age
    }
    jioa(){
        let t = 45
        console.log(t)
    }
}
class animal1 extends animal{
 
}
class animal2 extends animal1{

}

const all = new animal2('电饭煲',56)
console.log(all)
// all.jioa()

var array1 = [1,4,9,16];
const map1 = array1.map(x => x *2);
console.log(map1);

