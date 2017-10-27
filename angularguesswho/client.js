var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function () {

    var guess = this;

    var people = [{ name: 'Laura', github: 'goetsit', show: true }
        , { name: 'Chad', github: 'ChadRoesler', show: true }];


    guess.anotherTest= function () {

        console.log('completely lost');
        console.log(guess.guess1);
        console.log(guess.guess2);
      
    }

    guess.test = function (person) {
        console.log(person);
        guess.message = person;

    }

    guess.people = people;
});
