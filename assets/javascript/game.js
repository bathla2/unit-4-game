$(document).ready(function() {

    var firstNumber = Math.floor(Math.random() * 101)+20;
     var counter = 0;
     $("#randomNumber").text(firstNumber);

     var box1 = Math.floor(Math.random() * 12)+1;
     var box2 = Math.floor(Math.random() * 12)+1;
     var box3 = Math.floor(Math.random() * 12)+1;
     var box4 = Math.floor(Math.random() * 12)+1;
     var win1 = 0;
     var loss1 = 0;

     //console.log(box1 + ", " + box2 + ", " + box3 + ", " + box4);

     var j1 = $("#j1");
     var j2 = $("#j2");
     var j3 = $("#j3");
     var j4 = $("#j4");

    j1.attr("data-crystalvalue1", box1);
    j2.attr("data-crystalvalue2", box2);
    j3.attr("data-crystalvalue3", box3);
    j4.attr("data-crystalvalue4", box4);

    function resetGame() {
     $("#scoreCard, #randomNumber").empty();
     firstNumber = Math.floor(Math.random() * 101)+20;
     counter = 0;
     $("#randomNumber").text(firstNumber);

     box1 = Math.floor(Math.random() * 12)+1;
     box2 = Math.floor(Math.random() * 12)+1;
     box3 = Math.floor(Math.random() * 12)+1;
     box4 = Math.floor(Math.random() * 12)+1;

     //console.log(box1 + ", " + box2 + ", " + box3 + ", " + box4);

     j1 = $("#j1");
     j2 = $("#j2");
     j3 = $("#j3");
     j4 = $("#j4");

    j1.attr("data-crystalvalue1", box1);
    j2.attr("data-crystalvalue2", box2);
    j3.attr("data-crystalvalue3", box3);
    j4.attr("data-crystalvalue4", box4);

       
     }


   j1.on("click", function() {
     var crystalValue1 = ($(this).attr("data-crystalvalue1"));
     crystalValue1 = parseInt(crystalValue1);
     counter += crystalValue1;
     $("#scoreCard").html(counter);

     if (counter === firstNumber) 
     {
       alert("You win!");
       win1 = win1+1;
       $("#win").html(win1);
       resetGame();
     }

     else if (counter >= firstNumber) 
     {
       alert("You lose!!");
       loss1 = loss1+1;
       $("#loss").html(loss1);
       resetGame();
     }

   });

   j2.on("click", function() {
     var crystalValue2 = ($(this).attr("data-crystalvalue2"));
     crystalValue2 = parseInt(crystalValue2);
     counter += crystalValue2;
     $("#scoreCard").html(counter);

     if (counter === firstNumber) 
     {
       alert("You win!");
       win1 = win1+1;
       $("#win").html(win1);
       resetGame();
     }

     else if (counter >= firstNumber) 
     {
       alert("You lose!!");
       loss1 = loss1+1;
       $("#loss").html(loss1);
       resetGame();
     }

   });

   j3.on("click", function() {
     var crystalValue3 = ($(this).attr("data-crystalvalue3"));
     crystalValue3 = parseInt(crystalValue3);
     counter += crystalValue3;
     $("#scoreCard").html(counter);

     if (counter === firstNumber) 
     {
       alert("You win!");
       win1 = win1+1;
       $("#win").html(win1);
       resetGame();
     }

     else if (counter >= firstNumber) 
     {
       alert("You lose!!");
       loss1 = loss1+1;
       $("#loss").html(loss1);
       resetGame();
     }

   });

   j4.on("click", function() {
     var crystalValue4 = ($(this).attr("data-crystalvalue4"));
     crystalValue4 = parseInt(crystalValue4);
     counter += crystalValue4;
     $("#scoreCard").html(counter);

     if (counter === firstNumber) 
     {
       alert("You win!");
       win1 = win1+1;
       $("#win").html(win1);
       resetGame();
     }

     else if (counter >= firstNumber) 
     {
       alert("You lose!!");
       loss1 = loss1+1;
       $("#loss").html(loss1);
       resetGame();
     }

   });

 
});
   