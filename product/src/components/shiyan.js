// // function Person(name,age){
// //     this.name = name
// //     this.age = age
// //     console.log(789)
// // }
// // Person.prototype.say = function(){
	
// // }
// // const p1 = new Person("玩的",12)
// // const p2 = new Person("非凡哥",23)
// // console.log(p1,p2)

// // class animal{
// //     constructor(name,age){
// //         this.name = name
// //         this.age = age
// //     }
// //     jioa(){
// //         let t = 45
// //         console.log(t)
// //     }
// // }
// // class animal1 extends animal{
 
// // }
// // class animal2 extends animal1{

// // }

// // const all = new animal2('电饭煲',56)
// // console.log(all)
// // // all.jioa()

// // var array1 = [1,4,9,16];
// // const map1 = array1.map(x => x *2);
// // console.log(map1);

// // 算法
// // var example=[1,10,4,3,8,9,6,2]
		
// // function quickSort(arr){
// // 	if(arr.length<=1){
// // 		return arr;
// // 	}
// //     var left=[],right=[],current=arr.splice(0,1);
// //     console.log(arr)
// // 	for(let i=0;i<arr.length;i++){
// // 		if(arr[i]<current){
// // 			left.push(arr[i])
// // 		}else{
// // 			right.push(arr[i])
// // 		}
// // 	}
// // 	return quickSort(left).concat(current,quickSort(right));
// // }
// // console.log(quickSort(example)); //[1, 2, 3, 4, 6, 8, 9]

// const a = { age:0,nam:'wer'}
// const b = a
// let  c = 1
// let d = c
// c = 2
// // console.log(d,c)
// // b.sex = '男'
// // for(let i in a){
// // 	console.log(i)
// // }

// const object1 = {
// a: 1,
// b: 2,
// c: 3
// };
// object1.c = 9
// const object2 = Object.assign({c: 4, d: 5}, object1);
// console.log(object2.c, object1.c);

// //深拷贝:拷贝还是复制,深:把一个对象中所有的属性或者方法,一个一个的找到.并且在另一个对象中开辟相应的空间,一个一个的存储到另一个对象中

// var obj1 = {
// 	age: 10,
// 	sex: "男",
// 	car: ["奔驰", "宝马", "特斯拉", "奥拓"],
// 	dog: {
// 		name: "大黄",
// 		age: 5,
// 		color: "黑白色"
// 	}
// };

// var obj2 = {};//空对象
// //通过函数实现,把对象a中的所有的数据深拷贝到对象b中
// // use recursion
// function deepCopy(obj,targetObj){
// 	for (let key in obj){
// 		let item = obj[key];
// 		if (item instanceof Array){//if array
// 			targetObj[key] = [];
// 			deepCopy(item,targetObj[key]);
// 		}else if (item instanceof Object){//if object
// 			targetObj[key] = {};
// 			deepCopy(item,targetObj[key]);
// 		}else {//normal attribute
// 			targetObj[key] = obj[key];
// 		}
// 	}
// }
// deepCopy(obj1,obj2);
// console.dir(obj1);
// console.dir(obj2);

// setTimeout(() => {
// 	console.log('set1')
// 	new Promise((resolve,reject)=>{
// 		console.log('pr1')
// 		resolve()
// 	}).then(()=>{
// 		console.log('then1')
// 	})
// });

// new Promise((resolve,reject)=>{
// 	console.log('pr2')
// 	resolve()
// }).then(()=>{
// 	console.log('then2')
// 	setTimeout(() => {
// 		console.log('set2')	
// 	});
// })

// setTimeout(() => {
// 	console.log('set3')	
// });

// console.log(4)

// var age = 'age'
// var age1 = 'age1'
// var obj = {
// 	name:'我的',
// 	age:this.age,
// 	age1:this.age1,
// 	myfun:function(i,j,k){
// 		console.log(this.name+age+this.age1+i+k+j)
// 	}
// }
// var newdata = {
// 	name:'新的',
// 	i:1,
// 	j:2,
// 	k:3
// }
// obj.myfun()

// function Person(name, height) {
//     this.sayInfo = function() {
//         return "姓名：" + name + ", 身高：" + height + ", 体重：" + this.weight;
//     }
// }
// //子类
// function Chinese(name, height, weight) {
//     Person.call(this, name, height);
//     this.weight = weight;
    
//     this.nation = function() {
//         console.log("我是中国人");
//     }
// }
// //子类
// function America(name, height, weight) {
//     Person.apply(this, arguments);
//     this.weight = weight;
// }

// let chiness = new Chinese("成龙", "178cm", "60kg");
// console.log(chiness.sayInfo());    //姓名：成龙, 身高：178cm, 体重：60kg
// let america = new America("jack", "180cm", "55kg");
// console.log(america.sayInfo());    //姓名：jack, 身高：180cm, 体重：55kg

// async function run(){
// 	let a = 5
// 	console.log(1)
// 	setTimeout(() => {
// 		console.log(2)
// 	}, 0);
// 	let asyncFuntion= a =>{
// 		return new Promise((resolve,reject)=>{
// 			console.log(3);
// 			setTimeout(() => {
// 				console.log(4)
// 				resolve(a)
// 			}, 100);
// 		})
// 	}
// 	let res = await asyncFuntion(a)
// 	console.log(a)
// }
// run()
// class Point {

// 	constructor(x, y) {
// 	  this.x = x;
// 	  this.y = y;
// 	}
  
// 	toString() {
// 	  console.log(this.x  )
// 	}
  
//   }
  
//   var point = new Point();
 
//   const  { po } = point;
  
//   po() // (2, 3)

//   const promise1 = new Promise((resolve, reject) => {
// 	  console.log(10)
// 	setTimeout(() => {
// 		console.log(4)
// 	  resolve('success')
// 	}, 1000)
//   })
//   const promise2 = promise1.then(() => {
// 	  console.log(3)
// 	throw new Error('error!!!')
//   })
  
//   console.log('promise1', promise1)
//   console.log('promise2', promise2)
//   console.log(1)
  
//   setTimeout(() => {
// 	console.log(5)
// 	console.log('promise1', promise1)
// 	console.log(2)
// 	console.log('promise2', promise2)
//   }, 2000)

// function ClassA (arg) { 
// 	this.arg = arg;
//  }
// ClassA.prototype.x = 20; 
// function ClassB(x) { this.x = x; }
// ClassB.prototype = new ClassA(30);
// var a = new ClassA('xxxxx'), b = new ClassB(40); 
// console.log (a instanceof Object);
// console.log(a instanceof ClassA);
// console.log(b instanceof Object);
// console.log (b instanceof ClassA);
// a.x = 30;
// console.log(a.x)
// delete a.x
// console.log(a.x)
// console.log(b.x)
// delete b.x
// console.log(b.x)
// ,输出对象{ id: 'news', name: 'search', ref: 'website' }
let str = 'https://www.qq.com/query?id=news&name=search&ref=website'
let obj = {}
function a(){
	let arr = str.split('?')[1].split('&')
	for(let i in arr){
		obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
	}
	console.log(obj)
}
a()

var list = [1,2,3,4,5,6];
var reverseList = function(num) {
	let index = list.indexOf(num)
	let rev_arr = list.slice(0,num)
	let rev_arr1 = list.slice(index+1)
	rev_arr.reverse()
	rev_arr = rev_arr.concat(rev_arr1)
	console.log(rev_arr1)

};

reverseList(2)

async function sendMesg(){
	for(let i = 0 ;i<20;i++ ){
		await new Promise((resolve,reject)=>{
			for(let j = 1 ;j<=10;j++ ){
				new Promise((resolve,reject)=>{
					setTimeout(() => {
						console.log('i'+i+'j'+j)
						resolve()
					}, 1000);
				})
			}
			resolve()
		})
	}
}
sendMesg()

function a(list,num){
	let arr = []
	for(let i = 0 ;  i <list.length;i++ ){
		if(i % num == 0 && i != 0){
		   let newarr = list.slice(i-num,i)
		   arr = arr.concat(newarr.reverse())
		 }
	}
	let index = num%list.length
	let lastarr = list.slice(list.length-index,list.length)
	arr = arr.concat(lastarr.reverse())
	console.log(arr)
}
a([1,2,3,4,5,6],2)