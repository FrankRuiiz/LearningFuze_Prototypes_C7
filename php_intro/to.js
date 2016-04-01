//EXERCISE 1
var var1='hello';
var var2=4;
var var3=['foo', 'bar'];


//EXERCISE 2

var var11=4;
var11='hello';

//EXERCISE 3

var numbers = [3,5,16,3,4,18];
var result = numbers[0];

for (var i = 0;i<numbers.length;i++){
    result += numbers[i];
}
console.log(result);

//EXERCISE 4

console.log('this is a string' + "this is another string");

//EXERCISE 5

var my_float=3.5;
var my_int=parseInt(my_float);
var my_float2 = 5.3;
var my_int2=parseInt(my_float2);

//EXERCISE 6

var myvar111 = 'hello';
if(my_var22) {
    console.log(myvar22)

}else{
    console.log(myvar111)

}

//EXERCISE 7

var check_var= 'What time is it?';

switch(check_var){
    case 'hello':
        console.log('greetings');
        break;
    case 'bye':
        console.log('goodbye');
        break;
    default:
        console.log('It\'s party time!');
        break;
}



//EXERCISE 8

var student = {
    name:'Skippy',
    class:'English',
    grade:75

};


//EXERCISE 9

function stdClass(){
    this.name = 'Skippy';
    this.class = 'English';
    this.grade = 75;

}


//EXERCISE 10

var num_array = [35,2,14,56,65,52];
var i;
var increment;
var end_loop;
function find_greatest_num_and_index(direction){
    var greatest = null;
    var greatest_index = null;
    if(direction >= 0 ){
        i = 0;
        increment = 1;
        end_loop = num_array.length;
    }else{
        i = num_array.length;
        increment = -1;
        end_loop = 0;
    }

    while(i != end_loop){
        if(num_array[i] > greatest){

            greatest = num_array[i];
            greatest_index = i;
        }
        i += increment;
    }
    return 'greatest: ' + greatest, 'greatest Index: ' + greatest_index;

}
find_greatest_num_and_index(1);