# Javascript Airport
This repository is about how I learnt a new language: JavaScript

## The program
- Airports allow any number of planes as a capacity
- Specific planes can take-off and land
- Planes can be confirmed landed
- Planes cannot take-off or land if weather conditions are bad (generated randomly)
- User warned when airport is full or empty

## Approach
As a strategy for learning a new language, I went back to one of my [first ever programs](https://github.com/ffasolin/airport_challenge) written in Ruby, the first programming language I learnt.
I rewrote the same simple program in the new language so I could use a range of basic techniques. TDDing was crucial during this process of understanding how JavaScript works and how programs are run differently than in Ruby.

Each of the construction functions were written following the concepts of TDD, single responsability and encapsulation. *Airport* is only responsible for taking off and landing planes, whilst *Plane* is responsible for checking if ship is landed. Finally, *Weather* determines, well, if the weather is stormy or not, which will prevent landing.

## How to run the tests
- Load the SpecRunner.html file path on the browser

## How to run the program:
- Open the dev tools in the browser tab where the tests are running
- Click on the console tab
- Simple example:
```
var airport = new Airport();
var weather = new Weather();

airport
Airport {runway: Array(0), capacity: 10}

var plane = new Plane();

airport.takeOff(plane, weather)
Uncaught Airport is empty

airport.land(plane, weather)

airport
Airport {runway: Array(1), capacity: 10}

airport.takeOff(plane, weather)
Uncaught Weather is stormy
airport.takeOff(plane, weather)

airport
Airport {runway: Array(0), capacity: 10}
for (var i = 0; i < 10; i++) {
    airport.land(plane, weather)
}

airport
Airport {runway: Array(10), capacity: 10}

airport.land(plane, weather)
Uncaught Airport is full
```

## Further improvement
If I had more time, without considering expanding the code further, I would extract the error messages into separate methods inside Airport. This would ensure each method had a clearer responsability and would also avoid nested conditionals, providing a more readable code.
