// function someClass(){
// 	this.message = "hello";
// 	// this.print = function(){
// 	// 	return this.message;
// 	// }
// 	this.print = () => {
// 		return this.message;
// 	}
// }

// let obj = new someClass();

// let somefunc = obj.print;
// console.log(somefunc());


class someClass {
	constructor() {
		this.message = 'hello';
	}
	print = () => {
		return this.message;
	}
}

let obj = new someClass();

console.log(obj.print());
