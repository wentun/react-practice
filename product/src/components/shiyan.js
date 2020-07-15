// function Person(name,age){
//     this.name = name
//     this.age = age
//     console.log(789)
// }
// Person.prototype.say = function(){
	
// }
// const p1 = new Person("玩的",12)
// const p2 = new Person("非凡哥",23)
// console.log(p1,p2)

// class animal{
//     constructor(name,age){
//         this.name = name
//         this.age = age
//     }
//     jioa(){
//         let t = 45
//         console.log(t)
//     }
// }
// class animal1 extends animal{
 
// }
// class animal2 extends animal1{

// }

// const all = new animal2('电饭煲',56)
// console.log(all)
// // all.jioa()

// var array1 = [1,4,9,16];
// const map1 = array1.map(x => x *2);
// console.log(map1);

// 算法
// var example=[1,10,4,3,8,9,6,2]
		
// function quickSort(arr){
// 	if(arr.length<=1){
// 		return arr;
// 	}
//     var left=[],right=[],current=arr.splice(0,1);
//     console.log(arr)
// 	for(let i=0;i<arr.length;i++){
// 		if(arr[i]<current){
// 			left.push(arr[i])
// 		}else{
// 			right.push(arr[i])
// 		}
// 	}
// 	return quickSort(left).concat(current,quickSort(right));
// }
// console.log(quickSort(example)); //[1, 2, 3, 4, 6, 8, 9]

const a = { age:0,nam:'wer'}
const b = a
let  c = 1
let d = c
c = 2
// console.log(d,c)
// b.sex = '男'
// for(let i in a){
// 	console.log(i)
// }

const object1 = {
a: 1,
b: 2,
c: 3
};
object1.c = 9
const object2 = Object.assign({c: 4, d: 5}, object1);
console.log(object2.c, object1.c);

//深拷贝:拷贝还是复制,深:把一个对象中所有的属性或者方法,一个一个的找到.并且在另一个对象中开辟相应的空间,一个一个的存储到另一个对象中

var obj1 = {
	age: 10,
	sex: "男",
	car: ["奔驰", "宝马", "特斯拉", "奥拓"],
	dog: {
		name: "大黄",
		age: 5,
		color: "黑白色"
	}
};

var obj2 = {};//空对象
//通过函数实现,把对象a中的所有的数据深拷贝到对象b中
// use recursion
function deepCopy(obj,targetObj){
	for (let key in obj){
		let item = obj[key];
		if (item instanceof Array){//if array
			targetObj[key] = [];
			deepCopy(item,targetObj[key]);
		}else if (item instanceof Object){//if object
			targetObj[key] = {};
			deepCopy(item,targetObj[key]);
		}else {//normal attribute
			targetObj[key] = obj[key];
		}
	}
}
deepCopy(obj1,obj2);
console.dir(obj1);
console.dir(obj2);

setTimeout(() => {
	console.log('set1')
	new Promise((resolve,reject)=>{
		console.log('pr1')
		resolve()
	}).then(()=>{
		console.log('then1')
	})
});

new Promise((resolve,reject)=>{
	console.log('pr2')
	resolve()
}).then(()=>{
	console.log('then2')
	setTimeout(() => {
		console.log('set2')	
	});
})

setTimeout(() => {
	console.log('set3')	
});

console.log(4)