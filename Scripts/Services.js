
worldCupR.services = angular.module("worldCupR.services", []);
/* In order to practice I repeat this code but a better idea would be create a 
 * factory to create these kind of service and return a promise. */
worldCupR.services.factory('teams', function ($http, $q, $route) {
    return {
        teamsResults: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + "/teams/results").success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        },
        teamsGroupResults: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + '/teams/group_results').success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        },
        team: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + '/teams/results').success(function (teams) {
                var team = {}
                    ,id = $route.current.params.id;
                for (var i = 0, numTeams = teams.length; i < numTeams; i++) {
                    if (teams[i].id == id) {
                        team = teams[i];
                        break;
                    }
                }
                delay.resolve(team);
            });
            return delay.promise;
        }
    };
});
worldCupR.services.factory('matches', function ($http, $q) {
    return {
        all: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + "/matches").success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        },
        today: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + '/matches/today').success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        },
        tomorrow: function () {
            var delay = $q.defer();
            $http.get(worldCupR.URL + '/matches/tomorrow').success(function (data) {
                delay.resolve(data);
            });
            return delay.promise;
        }
    }
});