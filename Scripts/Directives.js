worldCupR.directives = angular.module('worldCupR.directives', []);

worldCupR.directives.directive('loadingbar', function ($rootScope) {
    return {
        restrict: 'E',
        templateUrl: '/Templates/loadingbar.html',
        replace: true,
        link: function (scope, element, attrs) {
            element.addClass('hide');
            $rootScope.$on('$routeChangeStart', function () {
                element.removeClass('hide');
            });
            $rootScope.$on('$routeChangeSuccess', function () {
                element.addClass('hide');
            });
        }
    };
});

worldCupR.directives.directive('wcPopover', function () {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {
            $(element).addClass('popover-dismiss');
            $(element).attr('data-toggle', 'popover')
            $(element).popover({
                trigger: 'hover'
            })
        }
    };
});