//FEATURE SET 1.1
//Defines a function called myMessage that will display a message in the console.
function myMessage(){
    console.log("Learning to code!");
}

//FEATURE SET 1.3
//The function add will add two parameters together and return the result
function add(num1,num2) {
    console.log(num1 + num2);
}


//FEATURE SET 2
//Using return, returns a number. Allowing me to set the function add2 to a variable or use in another function call
function add2(num1, num2){
    sum = num1 + num2;
    return sum;
}
var add2result = add2(10,12);


//FEATURE SET 3
function cardFlip(element){
  $(element).hide();
}

