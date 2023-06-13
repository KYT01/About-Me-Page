        "use strict";
        
        let user;

        alert("Hi, Im Kumail, welcome to my site");

        function userName() {
            user = prompt("What is your name?");
            alert("Welcome to my site " + user)
            console.log(user)
        }

        userName();

        alert("Time for some yes or no questions");



        let answer1 = prompt("Is my cat called Mario?").toLowerCase();
        console.log(answer1);

        while (answer1 != "yes" && answer1 != "no") {
            alert("please answer yes or no");
            answer1 = prompt("Is my cat called Mario?").toLowerCase(); 
        }

        if (answer1 === "yes") {
            alert("Incorrect, my cat is called Luigi");
            /* console.log("Incorrect, my cat is called Luigi"); */
        } else if (answer1 === "no") {
            alert("Correct, my cat is called Luigi");
            /* console.log("Correct, my cat is called Luigi"); */
        }
        
        
        
        let answer2 = prompt("Am I allergic to apples?").toLowerCase();
        console.log(answer2);

        while (answer2 != "yes" && answer2 != "no") {
            alert("please answer yes or no");
            answer2 = prompt("Am I allergic to apples?").toLowerCase(); 
        }

        if (answer2 === "yes") {
            alert("Correct, I am mildly allergic to apples");
            /* console.log("Correct, I am mildly allergic to apples"); */
        } else if (answer2 === "no") {
            alert("Incorrect, I am mildly allergic to apples");
            /* console.log("Incorrect, I am mildly allergic to apples"); */
        } else {
            alert("Please answer yes or no");
            /* console.log("Please answer yes or no"); */
        }


        let answer3 = prompt("Do I live in Peterborough?").toLowerCase();
        console.log(answer3);

        while (answer3 != "yes" && answer3 != "no") {
            alert("please answer yes or no");
            answer3 = prompt("Do I live in Peterborough?").toLowerCase(); 
        }

        if (answer3 === "yes") {
            alert("Correct, I do live in Peterborough");
            /* console.log("Correct, I do live in Peterborough"); */
        } else if (answer3 === "no") {
            alert("Incorrect, I unfortunately do");
            /* console.log("Incorrect, I unfortunately do"); */
        } else {
            alert("Please answer yes or no");
            /* console.log("Please answer yes or no"); */
        }



        let answer4 = prompt("Do I have a fear of the deep ocean?").toLowerCase();
        console.log(answer4);

        while (answer4 != "yes" && answer4 != "no") {
            alert("please answer yes or no");
            answer4 = prompt("Do I have a fear of the deep ocean?").toLowerCase(); 
        }

        if (answer4 === "yes") {
            alert("Correct, Im scared of squids");
            /* console.log("Correct, Im scared of squids"); */
        } else if (answer4 === "no") {
            alert("Incorrect, Im scared of squids");
            /* console.log("Incorrect, Im scared of squids"); */
        } else {
            alert("Please answer yes or no");
            /* console.log("Please answer yes or no"); */
        }



        let answer5 = prompt("Would a trillion lions win in a fight against the sun?").toLowerCase();
        console.log(answer5);

        while (answer5 != "yes" && answer5 != "no") {
            alert("please answer yes or no");
            answer5 = prompt("Would a trillion lions win in a fight against the sun?").toLowerCase(); 
        }

        if (answer5 === "yes") {
            alert("Correct, there is a trillion of them so they would overpower the sun");
            /* console.log("Correct, there is a trillion of them so they would overpower the sun"); */
        } else if (answer5 === "no") {
            alert("Incorrect, there is a trillion of them so they would overpower the sun");
            /* console.log("Incorrect, there is a trillion of them so they would overpower the sun"); */
        } else {
            alert("Please answer yes or no");
            /* console.log("Please answer yes or no"); */
        }

