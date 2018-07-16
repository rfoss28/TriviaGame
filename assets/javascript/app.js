window.onload = function() {
  //declare global variables

  $(document).on("click", ".start", function() {
    var correctUserAnswers = 0;
    var incorrectUserAnswers = 0;
    var unanswered = 0;
    var userAnswers = [];
    var correctAnswers = ["b", "b", "d", "c", "a", "d", "d", "c"];
    var timeLimit = 0;
    var timer = 0;

    //Sets time limit and interval, calls the pageTimer function
    timeLimit = 120;
    timer = setInterval(pageTimer, 1000);

    //Displays the questions
    $(".questions").html(` 

<p id="timeRemaining"></p>

<form>
<div class="form-group text-center" name="questionForm">

<div class="row">
 <div class="radio-group mx-auto">
<h4> 1. In what year did the first episode of the Simpsons premiere?</h4>
<label class="radio"><input type="radio" value="a" name="questionOne"> a. 1988 </label>
<label class="radio"><input  type="radio" value="b" name="questionOne"> b. 1989 </label>
<label class="radio"><input type="radio" value ="c" name="questionOne"> c. 1990 </label>
<label class="radio"><input type="radio" value ="d" name="questionOne"> d. 1991 </label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 2. What street do the Simpsons live on?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionTwo"> a Everest Terrace </label>
<label class="radio-inline"><input  type="radio" value="b" name="questionTwo"> b. Evergreen Terrace </label>
<label class="radio-inline"><input type="radio" value ="c" name="questionTwo"> c. Main Street </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionTwo"> d. Elm Street  </label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 3. Which celebrity has never appeared on The Simpsons?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionThree"> a. Michael Jackson </label>
<label class="radio-inline"><input  type="radio" value="b" name="questionThree"> b. Paul McCartney</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionThree"> c. Stephen Colbert </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionThree"> d. Donald Trump</label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 4. How old is Bart Simpson?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionFour"> a. 8 </label>
<label class="radio-inline"><input  type="radio" value="b" name="questionFour"> b. 9 </label>
<label class="radio-inline"><input type="radio" value ="c" name="questionFour"> c. 10 </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionFour"> d. 11</label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 5. What town do the Simpsons live in?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionFive"> a. Springfield</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionFive"> b. Shelbyville</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionFive"> c. Springville 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionFive"> d. Ogdenville</label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 6. What is the name of the Simpsons' current cat?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionSix"> a. Snowball </label>
<label class="radio-inline"><input  type="radio" value="b" name="questionSix"> b. Snowball II the sequel</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionSix"> c. Snowball IV </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionSix"> d. Snowball V </label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 7. Who shot Mr. Burns?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionSeven"> a. Kusty the Clown </label>
<label class="radio-inline"><input  type="radio" value="b" name="questionSeven"> b. Homer Simpson </label>
<label class="radio-inline"><input type="radio" value ="c" name="questionSeven"> c. Marge Simpson </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionSeven"> d. Maggie Simpson</label>
</div>
</div>

<div class="row">
<div class="radio-group mx-auto">
<h4> 8. According to the song " We do" what group "makes Steve Guttenburg a star"?</h4>
<label class="radio-inline"><input type="radio" value="a" name="questionEight"> a. The Free Masons</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionEight"> b. The Shriners</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionEight"> c .The Stonecutters </label>
<label class="radio-inline"><input type="radio" value ="d" name="questionEight"> d. The Elks </label>
</div>
</div>
<button type="button" class="btn btn-primary done">Done</button>
</div>
</div>

</form>'
`);

    //Sets timer to 0 when done is clicked
    $(document).on("click", ".done", function() {
      timeLimit = 0;
    });

    function captureAnswers() {
      var answer1 = $("input[name=questionOne]:checked").val();
      var answer2 = $("input[name=questionTwo]:checked").val();
      var answer3 = $("input[name=questionThree]:checked").val();
      var answer4 = $("input[name=questionFour]:checked").val();
      var answer5 = $("input[name=questionFive]:checked").val();
      var answer6 = $("input[name=questionSix]:checked").val();
      var answer7 = $("input[name=questionSeven]:checked").val();
      var answer8 = $("input[name=questionEight]:checked").val();

      userAnswers = [
        answer1,
        answer2,
        answer3,
        answer4,
        answer5,
        answer6,
        answer7,
        answer8
      ];
      console.log(userAnswers);
    }

    //Checks userAnswers against the correct answers
    function checkAnswers() {
      for (i = 0; i < 8; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
          correctUserAnswers++;
          console.log(correctUserAnswers);

          // if the array item is blank then the user hasn't selected and item, the incorrect and unasnwered counters are incremented
        } else if (typeof userAnswers[i] === "undefined") {
          unanswered++;
          incorrectUserAnswers++;
          console.log(unanswered);
        } else {
          incorrectUserAnswers++;
          console.log(incorrectUserAnswers);
        }
      }
    }

    //function to set timer
    function pageTimer() {
      //Set 90 second timer
      // timeLimit = 10;
      // timer = setInterval(pageTimer, 1000);

      $("#timeRemaining").text("You have " + timeLimit + " seconds remaining");
      timeLimit--;
      //Clears the timer and displays time up message
      if (timeLimit <= 0) {
        //calls functions to capture input and check the answers
        captureAnswers();
        checkAnswers();

        //Displays time up message when time runs out, shows the score and button button to play again
        $(".questions").html(
          "<p>Time's up!</p>\
        <p>Correct Answers " +
            correctUserAnswers +
            "</p>\
        <p>Incorrect answers " +
            incorrectUserAnswers +
            "</p>\
        <p>Unanswered questions " +
            unanswered +
            '</p>\
         <br><button type="button" class="btn btn-primary start">Start Game</button> '
        );
        clearInterval(timer);
      }
    }
  });
};
