        "use strict";

        let points = 0;
        
        let user;

        alert("Hi, Im Kumail, welcome to my site");

        function userName() {
            user = prompt("What is your name?");
            alert("Welcome to my site " + user)
            console.log(user)
        }

        userName();

        alert("Time for some yes or no questions");


function cat(
){      
    let answer1 = prompt("Is my cat called Mario?").toLowerCase();
        console.log(answer1);

        while (answer1 != "yes" && answer1 != "no") {
            alert("please answer yes or no");
            answer1 = prompt("Is my cat called Mario?").toLowerCase(); 
        }

        if (answer1 === "yes") {
            alert("Incorrect, my cat is called Luigi");
            
        } else if (answer1 === "no") {
            alert("Correct, my cat is called Luigi");
            points++;
            
        }}
cat();
        
        
function apple(
){        
        let answer2 = prompt("Am I allergic to apples?").toLowerCase();
        console.log(answer2);

        while (answer2 != "yes" && answer2 != "no") {
            alert("please answer yes or no");
            answer2 = prompt("Am I allergic to apples?").toLowerCase(); 
        }

        if (answer2 === "yes") {
            alert("Correct, I am mildly allergic to apples");
            points++;
            
        } else if (answer2 === "no") {
            alert("Incorrect, I am mildly allergic to apples");
            
        } else {
            alert("Please answer yes or no");
            
        }}
apple();


function peterborough(
    ){  
        let answer3 = prompt("Do I live in Peterborough?").toLowerCase();
        console.log(answer3);

        while (answer3 != "yes" && answer3 != "no") {
            alert("please answer yes or no");
            answer3 = prompt("Do I live in Peterborough?").toLowerCase(); 
        }

        if (answer3 === "yes") {
            alert("Correct, I do live in Peterborough");
            points++;
           
        } else if (answer3 === "no") {
            alert("Incorrect, I unfortunately do");
            
        } else {
            alert("Please answer yes or no");
            
        }}
peterborough();


function ocean(
    ){
        let answer4 = prompt("Do I have a fear of the deep ocean?").toLowerCase();
        console.log(answer4);

        while (answer4 != "yes" && answer4 != "no") {
            alert("please answer yes or no");
            answer4 = prompt("Do I have a fear of the deep ocean?").toLowerCase(); 
        }

        if (answer4 === "yes") {
            alert("Correct, Im scared of squids");
            points++;
            
        } else if (answer4 === "no") {
            alert("Incorrect, Im scared of squids");
            
        } else {
            alert("Please answer yes or no");
            
        }}
ocean();


function lion(
    ){
        let answer5 = prompt("Would a trillion lions win in a fight against the sun?").toLowerCase();
        console.log(answer5);

        while (answer5 != "yes" && answer5 != "no") {
            alert("please answer yes or no");
            answer5 = prompt("Would a trillion lions win in a fight against the sun?").toLowerCase(); 
        }

        if (answer5 === "yes") {
            alert("Correct, there is a trillion of them so they would overpower the sun");
            points++;
            
        } else if (answer5 === "no") {
            alert("Incorrect, there is a trillion of them so they would overpower the sun");
            
        } else {
            alert("Please answer yes or no");
            
        }}
lion();



        let correctNumber = 7;
        let attempts = 4;

        while (attempts > 0) {
        let guess = +prompt("Guess a number between 1 and 20. You have 4 attempts.");

        if (guess === correctNumber) {
            alert("Congratulations! You guessed the correct number.");
            points++;
        break;
        } else if (guess > correctNumber) {
            alert("Too high. Try again.");
        } else {
            alert("Too low. Try again.");
        }

            attempts--;
        }

        if (attempts === 0) {
            alert("You have used up all your attempts. The correct number was " + correctNumber + ".");
        }



        let correctAnswers = ["apple pie", "apple crumble", "apple turnover"];
        let tries = 6;

        while (tries > 0) {
        let guess = prompt("What 3 desserts can you make out of apples?").toLowerCase();

        let correct = false;
        for (let i = 0; i < correctAnswers.length; i++) {
        if (guess === correctAnswers[i]) {
            correct = true;
        break;
        }
        }

        if (correct) {
            alert("Congratulations! That's a correct answer.");
            points++;
            break;
          } else {
            alert("That is not a correct answer. Please try again.");
          }
          
          tries--;
        }

        if (tries === 0) {
        let allAnswers = "The correct answers were: Apple pie, Apple crumble and Apple turnover"; 
            alert("You have used up all your attempts. " + allAnswers);
        }

        alert("Congratulations you got " + points + " out of 7 points!");
       
        