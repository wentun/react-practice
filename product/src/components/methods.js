// 计算小数
function computedByInt(a,b,type){
    let num
    let len = 0
    let len1 = 0,len2 = 0
    if(a.toString().indexOf('.') != -1){
        len1 = a.toString().split('.')[1].length
    }
    if(b.toString().indexOf('.') != -1){
        len2 = b.toString().split('.')[1].length
    }
    if(type == '+' || type == '-' || type == '/'){
        if(len1 > len2){
            len = Math.pow(10, len1)
        }else{
            len = Math.pow(10, len2)
        }
        if(type == '+'){
            return num = (a*len + b*len)/len
        }
        if(type == '-'){
            return num = (a*len - b*len)/len
        }
        if(type == '/'){
            return num = ((a*Math.pow(10, len)) / (b*Math.pow(10, len))).toFixed(6)
        }
    }
    if(type == '*'){
        len = len1 +len2
        return num = ((a*Math.pow(10, len1)) * (b*Math.pow(10, len2)))/Math.pow(10, len)
    }
}
//切割url参数
function siltUrl(){
    let str = 'https://www.qq.com/query?id=news&name=search&ref=website'
    let obj = {}
	let arr = str.split('?')[1].split('&')
	for(let i in arr){
		obj[arr[i].split('=')[0]] = arr[i].split('=')[1]
	}
	console.log(obj)
}