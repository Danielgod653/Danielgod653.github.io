//input a variable called number
let number=document.getElementById("number").value;
let numb=number;
let divide=0;
let binary=[];
//function to divide and get the remainder
function decide(num){
let remainder=num % 2;
return remainder
}
//function to check whether a number is decimal or whole number
function whole (number){
	let remain=number % 2;
	let output=number/2;
	if (remain == 1) {
		output=Math.floor(output) 
		return output
	} else {
		return output
	}
}
function convert(){
if (numb != 0) {
	 
	while(numb>0){
	let decid=decide(numb); 
	let whol=whole(numb);
	binary.push(decid)
	numb=whol;
}

}

	
console.log(binary)
document.getElementById("output").innerHTML=number+"in binary form:"+binary;

}
