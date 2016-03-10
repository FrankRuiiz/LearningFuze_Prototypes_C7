var app = angular.module('sgtApp', []);

app.provider('sgtData', function(){
    //Create a variable to hold this
    var self = this;
    //Create a variable to hold your api key but set it to an empty string
    var api_key = "";
    //Create a variable to hold the API url but set it to an empty string
    var api_url = "";

    //Add the necessary services to the function parameter list
    this.$get = function($http, $q, $log){
        //return an object that contains a function to call the API and get the student data
        //Refer to the prototype instructions for more help
        return {
           call_api: function() {
                $log.log(api_key);
                $log.log(api_url);
               var apiData = {api_key: self.api_key};
               var dataStr = $.param( apiData );
               var defer = $q.defer();
               $http({
                   url: self.api_url,
                   method: 'post',
                   data: dataStr,
                   headers: {
                       'Content-Type': 'application/x-www-form-urlencoded'
                   }
               })
               .then(
                   function success(data) {
                       defer.resolve(data);
                       $log.log(data);
                   },
                   function fail(data) {
                       defer.reject("Error");
                   });

               return defer.promise;
           }
        }
    };
});

//Config your provider here to set the api_key and the api_url
app.config(function(sgtDataProvider){
    sgtDataProvider.api_key = 'ITvoGBlH21';
    sgtDataProvider.api_url = 'http://s-apis.learningfuze.com/sgt/get';
});

//Include your service in the function parameter list along with any other services you may want to use
app.controller('ioController', function(sgtData){
    //Create a variable to hold this, DO NOT use the same name you used in your provider
    var controlSelf = this;
    //Add an empty data object to your controller, make sure to call it 'data'
    this.data = {};

    //Add a function called getData to your controller to call the SGT API
    //Refer to the prototype instructions for more help
    this.getData = function(){
       sgtData.call_api()
           .then(
               function success(data) {
                 controlSelf.data = data.data;
               },
               function fail(data) {
                   $log.log("API call failed");
               });
    };

});