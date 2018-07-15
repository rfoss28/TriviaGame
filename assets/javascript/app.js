window.onload = function() {
  //declare global variables





  $(document).on("click",".start", function() {
    var correctUserAnswers = 0;
    var incorrectUserAnswers = 0;
    var unanswered = 0;
    var userAnswers = [];
    var correctAnswers = ["a", "b", "c", "c", "b", "d", "a", "b"];
    var timeLimit = 0;
    var timer = 0;
    pageTimer();


    
    //Displays the questions
    $(".questions").html(`
<p id="timeRemaining"></p>
<div class="form-group text-center" name="questionForm">

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionOne">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionOne">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionOne">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionOne">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionTwo">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionTwo">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionTwo">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionTwo">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionThree">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionThree">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionThree">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionThree">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionFour">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionFour">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionFour">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionFour">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionFive">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionFive">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionFive">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionFive">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionSix">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionSix">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionSix">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionSix">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionSeven">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionSeven">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionSeven">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionSeven">Option 4</label>
</div>
</div>

<div class="row">
<div class="radio-group">
<label class="radio-inline"><input type="radio" value="a" name="questionEight">Option 1</label>
<label class="radio-inline"><input  type="radio" value="b" name="questionEight">Option 2</label>
<label class="radio-inline"><input type="radio" value ="c" name="questionEight">Option 3</label>
<label class="radio-inline"><input type="radio" value ="d" name="questionEight">Option 4</label>
</div>
</div>


</div>
`);

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

    function checkAnswers() {
      for (i = 0; i < 8; i++) {
        if (userAnswers[i] === correctAnswers[i]) {
          correctUserAnswers++;
          console.log(correctUserAnswers);
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

    //   //Check what answer is selected and log the value
    //   // var selectedButton;

    //   // function checkSelected() {
    // // $(".radio-group").each(function(){
    // //  console.log("radio group")

    //     console.log(this);
    //       if ($("input:radio").is(':checked')) {

    //         selectedButton = this.value;
    //         console.log(selectedButton);
    //       }
    //       else {
    //             unanswered++;
    //             console.log(unanswered);

    //       }

    //     });

    // }

    timeLimit = 10;
    timer = setInterval(pageTimer, 1000);
    //function to set timer
    function pageTimer() {
      //Set 90 second timer
      // timeLimit = 10;
      // timer = setInterval(pageTimer, 1000);

      $("#timeRemaining").text("You have " + timeLimit + " seconds remaining");
      timeLimit--;
      //Clears the timer and displays time up message
      if (timeLimit === 0) {
        //checkSelected();
        captureAnswers();
        checkAnswers();
        $(".questions").html('<p>Time\'s up</p>');
        $(".questions").append ('<p>Correct Answers '+ correctUserAnswers + '</p>\
        <p>Incorrect answers ' + incorrectUserAnswers + '</p>\
        <p>Unanswered questions ' + unanswered + '</p>\
         <br><button type="button" class="btn btn-primary start">Start Game</button> '

        );
        clearInterval(timer);
      }
    }
  });
};
