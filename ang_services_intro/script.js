

var app = angular.module("itunesSearch", []);

app.controller("searchController", function($http, $log) {
    var self = this;
    self.searchInput;
    this.customURL = function(searchTerm) {
        return 'https://itunes.apple.com/search?term=' + self.searchInput + '&callback=JSON_CALLBACK';
    };
    this.getData = function(){
        $http({
            url: this.customURL(),
            method: 'jsonp',
            cache: false
        }).then(
            function mySuccess(response) {
                $log.log(response.data.results);
                self.data = response.data.results;
            },
            function myFail(response) {
                $log.log("Fail");
            }
        )
    }
});