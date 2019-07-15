//need to make divs that move from the top of the page to the middle
//1st the div you select moves up
//the 2nd div you select moves down 


//maybe write a function that gives a property flex-end

//maybe have something that stores what you clicked and changes everything else



//if clicked then give other divs a class 
//like if green was clicked, give red, blue and yellow a class

//maybe create an array of the character IDs
// let characterIDs = ["red", "yellow", "blue", "green"];

// function attackerSet(){

//     if()

// }

// $("button").click(function() { 
//     var t = $(this).attr('id'); 
//     $('#GFG_DOWN').text("ID = " + t); 










$(document).ready(function(){
    //hide try again buttong
    $('#tryagain').css("visibility", "hidden");

    //start with no attacker
    let isAttacker = false;
    let isDefender = false;

    //character objects
    let redCharacter = {
      "HP": 100,
      "Attack": 5,
      "Defense": 30
    };
    let yellowCharacter = {
        "HP": 100,
        "Attack": 20,
        "Defense": 25
    }
    let blueCharacter = {
        "HP": 120,
        "Attack": 8,
        "Defense": 20
    }
    let greenCharacter = {
        "HP": 150,
        "Attack": 60,
        "Defense": 15
    }


/*=============================================
=            Character Selection            =
=============================================*/

$(".character").click(function(){

    //1st pass -- no attacker so set attacker to true and give what was clicked the attacker class 
    //2nd pass -- attacker is true so see if there is a defender
    //should prevent the player from clicking the remaining characters
    if(isAttacker === false){
        $(this).addClass('attacker');
        isAttacker = true;
    }
    else if(isDefender === false){
        $(this).addClass('defender');
        isDefender = true;
    }
    // console.log(isDefender);
    // console.log()
    // console.log($(this).attr('id'));
});


// /*=============================================
// =            Attacking/Defending            =
// =============================================*/

//when attack is hit, take what has the class attack and call on its objects attribute attack value 
//store the attack vaue to subtract from defender HP
let attackAmount = 0;
let defendAmount = 0;
let attackerHP = 0;
let defendersRemaining = 3;
let characterIDs = ["red", "yellow", "blue", "green"];

//removes defeated character 
//ticks remaining defenders
//reset defenders so another can be chosen
function defeatCharacter() {
    isDefender = false;
    defendersRemaining--;
    $('.defender').hide();
};

function gameOver(){
    $('#winloss').text("You Lose. Game Over");
    $('#tryagain').css("visibility", "visible");
}

function resetGame(){
    isAttacker = false;
    isDefender - false;
    attackAmount = 0;
    defendAmount = 0;
    defendersRemaining = 3;

    $(".attacker").removeClass('attacker');
    $(".defender").removeClass('defender');

    redCharacter.HP = 100;
    $('#redHP').text("HP: " + redCharacter.HP);
    blueCharacter.HP = 120;
    $('#blueHP').text("HP: " + blueCharacter.HP);
    greenCharacter.HP = 150;
    $('#greenHP').text("HP: " + greenCharacter.HP);
    yellowCharacter.HP = 100;
    $('#yellowHP').text("HP: " + yellowCharacter.HP);

    $('#winloss').text("");

    $('#tryagain').css("visibility", "hidden");

    $('.character').show();
}

// isDefender = false;
// defendersRemaining--;
// $("#red").remove();

$("#attackbutton").click(function(){

    // search attacker and set/increment attack value
    if($(".attacker").attr('id') === "red"){       
        if(attackAmount > 0){
            attackAmount = attackAmount + 5;    
        }
        else{
            attackAmount = redCharacter.Attack;
        }     
    }
    else if($(".attacker").attr('id') === "blue"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 8;    
        }
        else{
            attackAmount = blueCharacter.Attack;
        }    

    }
    else if($(".attacker").attr('id') === "green"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 8;    
        }
        else{
            attackAmount = greenCharacter.Attack;
        }    
    }
    else if($(".attacker").attr('id') === "yellow"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 10;    
        }
        else{
            attackAmount = yellowCharacter.Attack;
        }    
    }

    //search for defender and set defense amount
    if($(".defender").attr('id') === 'red'){
        defendAmount = redCharacter.Defense;
    }
    else if(($(".defender").attr('id') === 'blue')){
        defendAmount = blueCharacter.Defense;
    }
    else if(($(".defender").attr('id') === 'green')){
        defendAmount = greenCharacter.Defense;
    }
    else if(($(".defender").attr('id') === 'yellow')){
        defendAmount = yellowCharacter.Defense;
    }

    //subtract HP from attacker 
   if($(".attacker").attr('id') === 'red'){
       redCharacter["HP"] = redCharacter.HP - defendAmount;
       $('#redHP').text("HP: " + redCharacter.HP);
        //display game over if health reaches 0
       if(redCharacter.HP < 0){
           gameOver();
           
       }
   }
   else if($(".attacker").attr('id') === 'blue'){
        blueCharacter["HP"] = blueCharacter.HP - defendAmount;
        $('#blueHP').text("HP: " + blueCharacter.HP);

        if(blueCharacter.HP < 0){
            gameOver();
        }
    }
   else if($(".attacker").attr('id') === 'green'){
        greenCharacter["HP"] = greenCharacter.HP - defendAmount;
        $('#greenHP').text("HP: " + greenCharacter.HP);

        if(greenCharacter.HP < 0){
           gameOver();
        }
    }
    else if($(".attacker").attr('id') === 'yellow'){
        yellowCharacter["HP"] = yellowCharacter.HP - defendAmount;
        $('#yellowHP').text("HP: " + yellowCharacter.HP);

        if(yellowCharacter.HP < 0){
            gameOver();
        }
    }

    //subtract HP from defender
    if($(".defender").attr('id') === 'red'){
        redCharacter["HP"] = redCharacter.HP - attackAmount;
        $('#redHP').text("HP: " + redCharacter.HP);
        //check if HP is below 0 and remove if so, reset isDefender to false 
        //so other characters can become defenders
        if(redCharacter.HP <= 0){
            defeatCharacter();
        }
    }
    else if($(".defender").attr('id') === 'blue'){
         blueCharacter["HP"] = blueCharacter.HP - attackAmount;
         $('#blueHP').text("HP: " + blueCharacter.HP);

         if(blueCharacter.HP <= 0){
            defeatCharacter();
         }
     }
    else if($(".defender").attr('id') === 'green'){
         greenCharacter["HP"] = greenCharacter.HP - attackAmount;
         $('#greenHP').text("HP: " + greenCharacter.HP);

         if(greenCharacter.HP <= 0){
            defeatCharacter();
         }
     }
     else if($(".defender").attr('id') === 'yellow'){
         yellowCharacter["HP"] = yellowCharacter.HP - attackAmount;
         $('#yellowHP').text("HP: " + yellowCharacter.HP);

         if(yellowCharacter.HP <= 0){
            defeatCharacter();
         }
     }



     //beat the game
     if (defendersRemaining === 0){
         $("#winloss").text("yay you won!");
         $('#tryagain').css("visibility", "visible");
     }
     
     //reset button
     $('#tryagain').click(function () { 
         resetGame();
         
     });
    
   


});


});