
worldCupR.routes = angular.module('worldCupR.routes', ['ngRoute']);

worldCupR.routes.config(["$routeProvider", function ($routeProvider) {
    $routeProvider.
    when('/', {
        controller: 'MatchesController',
        templateUrl: 'Templates/Matches.html',
        resolve: {
            matchesList: function (matches) {
                return matches.today();
            }
        },
    }).
    when('/AllMatches', {
        controller: 'MatchesController',
        templateUrl: 'Templates/Matches.html',
        resolve: {
            matchesList: function (matches) {
                return matches.all();
            }
        },
    }).
    when('/TomorrowMatches', {
        controller: 'MatchesController',
        templateUrl: 'Templates/Matches.html',
        resolve: {
            matchesList: function (matches) {
                return matches.tomorrow();
            }
        },
    }).
    when('/Team/:id', {
        controller: 'TeamController',
        templateUrl: 'Templates/Team.html',
        resolve: {
            team: function (teams) {
                return teams.team();
            }
        }
    }).
    when('/Groups', {
        controller: 'GroupsController',
        templateUrl: 'Templates/Groups.html',
        resolve: {
            groupList: function (teams) {
                return teams.teamsGroupResults();
            }
        }
    }).
    when('/About', {
        templateUrl: 'Templates/About.html'
    }).otherwise({ redirectTo: '/' });
}]);