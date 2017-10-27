var myApp = angular.module('myApp',[]);

myApp.controller('GuessWhoController', function(){

    var guess = this;


    guess.test = function(person) {
        console.log(person);
    }
    
    var people = [{name: 'Laura', github: 'goetsit', show:true}
                ,{name: 'Chad', github: 'ChadRoesler',show:true}];

    guess.message = 'Who is pictured?';

    guess.people = people;
});
