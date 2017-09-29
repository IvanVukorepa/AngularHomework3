angular.module('app').filter('ratingFilter', function () {
    return function (input) {
        if (input >= 1 && input <= 5)
            return input + ' lose';
        else if (input >= 6 && input <= 8)
            return input + ' solidno';
        else
            return input + ' odlicno';
    };
});