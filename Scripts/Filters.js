
worldCupR.filters = angular.module('worldCupR.filters', []);

worldCupR.filters.filter('nospace', function () {
    return function (input) {
        return input.replace(' ', '');
    };
});

worldCupR.filters.filter('upperCaseFirstLetter', function () {
    return function (input) {
        input = input.toLowerCase();
        var words = input.split(' ');
        for (var i = 0, length = words.length; i < length; i++) {
            var firstLetter = words[i][0].toUpperCase();
            var restWord = words[i].substring(1);
            words[i] = firstLetter + restWord;
        }
        return words.join(' ');
    };
});