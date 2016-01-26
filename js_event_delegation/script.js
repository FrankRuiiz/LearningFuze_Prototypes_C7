// Answer the questions here:

// - What do you think is going to happen?
//   The new button will also be affected by the click handler

// - What happened?
//   The inner text for the new button was also consoled out just like the others.

// - Why?
//   The event was delegated to the child, in this case the button element within the #list ul
//========== Write your code below ===========//


$(document).ready(function(){
//FEATURE SET 1
    var myList = $('#list');
    myList.on('click','button',function(){
        console.log($(this).text());
//FEATURE SET 2
    });
    var newButton = $('<li></li>').html('<button style="margin:10px">Button #5</button>');
    myList.append(newButton);

});



