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
    //hide the 'try again' button
    $('#tryagain').css("visibility", "hidden");

    //used to keep track of the exsistance of an attacker/defender selecting characters so you don't choose more than one of each 
    let isAttacker = false;
    let isDefender = false;



/*=============================================
=            Character Objects                =
=============================================*/

    //character objects holding name, hp, attack, defense (found out I  don't need to put the keys in quotations)
    let redCharacter = {
      "Name": "Charizard",
      "HP": 100,
      "Attack": 5,
      "Defense": 30
    };
    let yellowCharacter = {
        "Name": "Raichu",
        "HP": 100,
        "Attack": 20,
        "Defense": 25
    }
    let blueCharacter = {
        "Name": "Wartortle",
        "HP": 120,
        "Attack": 8,
        "Defense": 20
    }
    let greenCharacter = {
        "Name": "Bulbasaur",
        "HP": 151,
        "Attack": 60,
        "Defense": 15
    }


/*=============================================
=            Character Selection            =
=============================================*/

//when the image of the charcater is clicked 
$(".character").click(function(){

    //1st pass -- no attacker so set attacker to true and give what was clicked the attacker class 
    //2nd pass -- attacker is true so see if there is a defender
    //should prevent the player from clicking the remaining characters
    //attacker class is used to mark the active attacker 
    if(isAttacker === false){
        $(this).addClass('attacker');
        isAttacker = true;
    }
    else if(isDefender === false){
        $(this).addClass('defender');
        isDefender = true;
    }
});


// /*=============================================
// =            Variables/Functions               =
// =============================================*/

//when attack is hit, take what has the class 'attacker' and call on its objects attribute attack value 
//store the attack vaue to subtract from defender HP
let attackAmount = 0;
let defendAmount = 0;
//used as a check to define a win at 0 defenders remaining 
let defendersRemaining = 3;

//update page with how much damage was done by the attacker
function  updateAttackInfo(){
    if($(".attacker").attr('id') === "red"){
        $("#attack-text").text(redCharacter.Name+ " attacked for " + attackAmount);
    }
    else if($(".attacker").attr('id') === "blue"){
        $("#attack-text").text(blueCharacter.Name+ " attacked for " + attackAmount);
    }
    else if($(".attacker").attr('id') === "green"){
        $("#attack-text").text(greenCharacter.Name+ " attacked for " + attackAmount);
    }
    else if($(".attacker").attr('id') === "yellow"){
        $("#attack-text").text(yellowCharacter.Name+ " attacked for " + attackAmount);
    }
 }

 //update page with how much damage is done by the defender 
 function updateDefenseInfo() {
    if($(".defender").attr('id') === "red"){
        $("#defense-text").text(redCharacter.Name+ " defended for " + defendAmount);
    }
    else if($(".defender").attr('id') === "blue"){
        $("#defense-text").text(blueCharacter.Name+ " defended for " + defendAmount);
    }
    else if($(".defender").attr('id') === "green"){
        $("#defense-text").text(greenCharacter.Name+ " defended for " + defendAmount);
    }
    else if($(".defender").attr('id') === "yellow"){
        $("#defense-text").text(yellowCharacter.Name+ " defended for " + defendAmount);
    }
 };


//removes defeated character 
//ticks remaining defenders
//reset defenders so another can be chosen
//remove defender class or else game will think there is more than one 
function defeatCharacter() {
    isDefender = false;
    defendersRemaining--;
    $('.defender').hide();
    $('.defender').removeClass("defender");
    $("#defense-text").empty();
};

//used when attacker health reaches ~0
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

    $("#attack-text").empty();

    $('#winloss').text("");

    $('#tryagain').css("visibility", "hidden");

    $('.character').show();
}


/*=============================================
=            Attack Button                    =
=============================================*/

$("#attackbutton").click(function(){

    // search for attacker and set/increment attack value 
    if($(".attacker").attr('id') === "red"){       
        if(attackAmount > 0){
            attackAmount = attackAmount + 5;   
            updateAttackInfo(); 
        }
        else{
            attackAmount = redCharacter.Attack;
            updateAttackInfo();
        }     
    }
    else if($(".attacker").attr('id') === "blue"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 8;   
            updateAttackInfo();
        }
        else{
            attackAmount = blueCharacter.Attack;
            updateAttackInfo();
        }    

    }
    else if($(".attacker").attr('id') === "green"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 8;   
            updateAttackInfo(); 
        }
        else{
            attackAmount = greenCharacter.Attack;
            updateAttackInfo();  
        }    
    }
    else if($(".attacker").attr('id') === "yellow"){
        if(attackAmount > 0){
            attackAmount = attackAmount + 10;    
            updateAttackInfo();  
        }
        else{
            attackAmount = yellowCharacter.Attack;
            updateAttackInfo(); 
        }    
    }

    //search for defender and set defense amount
    if($(".defender").attr('id') === 'red'){
        defendAmount = redCharacter.Defense;
        updateDefenseInfo();
    }
    else if(($(".defender").attr('id') === 'blue')){
        defendAmount = blueCharacter.Defense;
        updateDefenseInfo();
    }
    else if(($(".defender").attr('id') === 'green')){
        defendAmount = greenCharacter.Defense;
        updateDefenseInfo();
    }
    else if(($(".defender").attr('id') === 'yellow')){
        defendAmount = yellowCharacter.Defense;
        updateDefenseInfo();
    }

    //subtract HP from attacker 
   if($(".attacker").attr('id') === 'red'){
       redCharacter["HP"] = redCharacter.HP - defendAmount;
       $('#redHP').text("HP: " + redCharacter.HP);
        //display game over if health reaches 0
       if(redCharacter.HP <= 0){
           gameOver();   
       }
   }
   else if($(".attacker").attr('id') === 'blue'){
        blueCharacter["HP"] = blueCharacter.HP - defendAmount;
        $('#blueHP').text("HP: " + blueCharacter.HP);

        if(blueCharacter.HP <= 0){
            gameOver();
        }
    }
   else if($(".attacker").attr('id') === 'green'){
        greenCharacter["HP"] = greenCharacter.HP - defendAmount;
        $('#greenHP').text("HP: " + greenCharacter.HP);

        if(greenCharacter.HP <= 0){
           gameOver();
        }
    }
    else if($(".attacker").attr('id') === 'yellow'){
        yellowCharacter["HP"] = yellowCharacter.HP - defendAmount;
        $('#yellowHP').text("HP: " + yellowCharacter.HP);

        if(yellowCharacter.HP <= 0){
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