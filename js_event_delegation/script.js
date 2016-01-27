// Answer the questions here:

// - What do you think is going to happen?
//   The new button will not be affected by the handler

// - What happened?
//   The click handler logged out all of the clicks, except for the new button

// - Why?
//   The click handler could not read it as it was added dynamically after the page loaded/document ready
//========== Write your code below ===========//


$(document).ready(function(){


//FEATURE SET 1
//    $('#list button').on('click', function(){
//        console.log($(this).text());
//    });

////FEATURE SET 2
    var myList = $('#list');
    var newButton = $('<li></li>').html('<button style="margin:10px">Button #5</button>');
    myList.append(newButton);

////FEATURE SET 3
    myList.on('click','button',function() {
        console.log($(this).text());
    });


    //ADDITIONAL CHALLENGE
    myList.append('<li><a href="http://www.google.com"><button style="margin:10px">Button #6</button></a></li>');

    myList.on('click', 'a', function(){
        var elem = $(this);
        if (elem.is("[href^='http']")) {
            elem.attr('target','_blank');
        }
    });
});



