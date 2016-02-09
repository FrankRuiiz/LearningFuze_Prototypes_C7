//Create GLOBAL variable below here on line 2
var global_result;

$(document).ready(function(){
    $('button').click(function(){
        console.log('click initiated');
        $.ajax({
            dataType: 'json',
            url: 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json',
            success: function(result) {

                //FEATURE SET 1
                global_result = result;

                //FEATURE SET 2
                var firstMovieInfo = global_result.feed.entry[0]['im:image'][2];
                console.log('Third image of first movie: ', firstMovieInfo);

                //FEATURE SET 3 & 4

                //movie array variable for drilling down into the feed object and iterating through the array of movies
                movieArray = global_result.feed.entry;
                console.log(movieArray);
                for (var i = 0; i < movieArray.length; i++) {

                    //selects the third image from each array item in movieArray
                    var thirdIMG = movieArray[i]['im:image'][2].label;
                    var titleDir = movieArray[i].title.label;
                    console.log('Director and Title:' + i +'' , titleDir);
                    console.log('movie in movie array: ' + i + ' ', thirdIMG);

                    var html = '';
                    //html to add to the #main div
                    html += "<img src='" + thirdIMG + "'>";
                    html += "<h3>" + titleDir + "</h3>";
                    $('#main').append(html);

                }

                console.log('AJAX Success function called, with the following result:', result);

            }
        });
        console.log('End of click function');
    });
});