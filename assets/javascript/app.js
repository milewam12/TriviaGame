
// TIMER //
window.onload = function () {
    $("#start").on("click", timeCount.runtimer);
    $


//     $("#done").click(function () {
//     $("#clear").detach();
    
// })
}

var timeCount = {
    timer : 5,
    intervalId:"" ,
    reset: function (){
        timeCount.timer = 0;
    },
    runtimer : function () {
    intervalId = setInterval(timeCount.decrement, 1000);
    },
    decrement : function() {
    timeCount.timer--;
    
    $("#show-timer").html("<h3> Time remaining: " + timeCount.timer + "  seconds</h3>")
    if (timeCount.timer === 0){
    timeCount.stop();
    alert("Time Up!");
    }
    },

    stop : function () {
        clearInterval(intervalId);
    }
    }


$(document).ready(function () {

  

//GLOBAL VARIABLES//

var questions = {

    q1: {
        question: "Which attraction listed below is the newest in the Orlando area as of May 2001?",
        options: ["Discovery Cove" , "Disney's Animal Kingdom" , "The Holy Land Experience" , "Islands of Adventure"],
        answer: "The Holy Land Experience"
    },

    q2: {
        question: "Which venue listed below is the night time entertainment area at Universal?",
        options: ["Church Street Station","City Walk", "Pleasure Island", "Ybor City"],
        answer: "City Walk"
    },

      q3: {
        question: "Which city, just north of Orlando, is home to the Charles Hosmer Morse Museum of American Art and its famous collection of Tiffany Glass?",
        options: ["Park City", "Garden City", "Winter Park", "Winter Garden"],
        answer: "Winter Park"
    },

      q4: {
        question: "The Disney Attraction in Orlando that houses the four Parks is?",
        options: ["Busch Gardens" , "Universal Studios" , "Disney World" , "Gatorland"],
        answer: "Disney World"
    },

          q5: {
        question: "What does EPCOT Center stands for?",
        options: ["Environmental Prototype Community of Tomorrow" , "Everymans Perfect Community of Tomorrow" , "Experimental Preview Prototype Community of Tomorrow" , "Experimental Prototype Community of Tomorrow"],
        answer: "Experimental Prototype Community of Tomorrow"
    },
}




//Scores//
var correctAnswers;
var incorrectAnswers;
var unanswered;

// FUNCTIONS//

function startTrivia(params) {
 
}

$("#done").click(function () {
    $("#clear").detach();
    
})


//end of (document).ready
})
