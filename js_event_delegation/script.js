// Answer the questions here:

// - What do you think is going to happen?

// - What happened?

// - Why?

//========== Write your code below ===========//

//FEATURE SET 1
$(document).ready(function(){

    $('#list').on('click','li',function(){
        console.log($(this).text());
    });
});

//FEATURE SET 2