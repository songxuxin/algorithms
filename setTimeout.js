// for(let i=0; i<10 ; i++){
// 	let count = 0;
// 	setTimeout(()=>{
// 		console.log(count++);
// 	},300);
// }

const print = (count) => {
    console.log(count++);
  	setTimeout(function(){
   		print(count);
  	}, 1000);
};

print(1);