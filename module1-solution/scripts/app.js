(function () {
 'use strict';

angular.module( 'LunchBoxApp', [] )
.controller ('LunchBoxController', LunchBoxController);

LunchBoxController.$inject = ['$scope'];

function LunchBoxController ($scope) {

  $scope.lunchItems = "";
  $scope.boxStatus = "";
  var lunchItemsArray = [];
  var comma = ',';
  var itemNumber = 0;


  $scope.spaceCheck = function () {

    //lunchItems takes a comma separated list
    //lunchItems is parsed by spaceCheck to determine how many items are in the list
    //return nmber of items

    //itemNumber = stringSplit().length;
    itemNumber = removeEmptyItems(stringSplit()).length;
    console.log("Cleaned Array of Lunch Items: ", removeEmptyItems(stringSplit()) );
    console.log("Number of Items: ", itemNumber );
    setBoxStatus();
    return;
  };

  var stringSplit = function () {

    //converts lunchItems to an array of items

    lunchItemsArray = $scope.lunchItems.split( comma );
    console.log("Array of Lunch Items: ", lunchItemsArray );

    return lunchItemsArray;
  };

  var removeEmptyItems = function (array) {

    var lunchItemsArrayCleaned = [];

      for (var i = 0; i<array.length; i++)
      {
        if ( array[i] != "" ) {
          lunchItemsArrayCleaned.push(array[i]);
        }
      }
    return lunchItemsArrayCleaned;
  };

  var setBoxStatus = function () {

    //takes spaceCheck return value
    // spaceCheck value is used to set the status message for boxStatus
    if ( itemNumber <= 0 ){
      itemNumber = 0;
      $scope.boxStatus = "Lunch Box is Empty. Pack your Lunch!"
    }
    else if ( itemNumber > 0 && itemNumber <= 3 ){
      $scope.boxStatus = "Enjoy!";
    }
    else if ( itemNumber > 3 ) {
      $scope.boxStatus = "Too many items!";
    }
    return;
  };
};

})();
