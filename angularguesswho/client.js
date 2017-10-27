var myApp = angular.module('myApp', []);

myApp.controller('GuessWhoController', function () {

    var guess = this;



    var people = [{ name: 'Laura', github: 'goetsit', show: true }
        , { name: 'Chad', github: 'ChadRoesler', show: true }];


    function anotherTest() {

        var idk = angular.element('#idkOne').value();
        console.log(' test because i am completely lost');
        console.log(idk);
    }



    guess.test = function (person) {
        console.log(person);
        guess.message = person;

    }



    guess.people = people;
});
