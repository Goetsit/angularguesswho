var myApp = angular.module('myApp',[]);

myApp.controller('GuessWhoController', function(){

    var guess = this;
    
    var people = [{name: 'Laura', github: 'goetsit', show:true}
                ,{name: 'Chad', github: 'ChadRoesler',show:true}];

    guess.message = 'Who is pictured?';

    guess.people = people;
});
