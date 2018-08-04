
// REF helpful sight with a bunch of the logical operators
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators

// Music  REF Material
//https://stackoverflow.com/questions/18826147/javascript-audio-play-on-click
//https://www.w3schools.com/graphics/game_sound.asp


//unknown music source it was pre-loaded onto my windows PC

const audio = new Audio("Sleep_Away.mp3");
//set ccontraint "auido" as new Audio file
audio.volume = 0.2;
//reduce to 20% volume
document.querySelector("body").addEventListener("click", play_audio);
//listen for click in "body"
const soundIcon = document.getElementById("sound");

//function to begin audio called on click from above
function play_audio() {
  //loop music
  audio.loop = true;
  //execute constraint defined above
  audio.play();
}

/*
 * Create a list that holds all of your cards
 */

$(document).ready(function() {
  //deck populates all the font awesome cards for the game
  var deck = [
    "fa fa-diamond",
    "fa fa-paper-plane-o",
    "fa fa-anchor",
    "fa fa-bolt",
    "fa fa-cube",
    "fa fa-anchor",
    "fa fa-leaf",
    "fa fa-bicycle",
    "fa fa-diamond",
    "fa fa-bomb",
    "fa fa-leaf",
    "fa fa-bomb",
    "fa fa-bolt",
    "fa fa-bicycle",
    "fa fa-paper-plane-o",
    "fa fa-cube"
  ];

  var selected_cards = [];
  //cards that have been picked looking for match
  var card_position = [];
  // keeps cards position in the deck
  var number_active = 0;
  // used to prevent more than 2 at a time being selected
  var move_count = 0; 
  // variable containing number of moves
  var number_showing = 0;  
  // how many cards are visible / flipped over



// Shuffle function from http://stackoverflow.com/a/2450976. Provided in example from udacity
  function shuffle(array) {
    var currentIndex = array.length,
      temporaryValue,
      randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

//The next two functions are a result of hours of trial and error and a lot of googling
// I did have to seek help from a mentor who has previously completed the program, not sure how
// to site that source... all code was written by me i was only assisted in troubleshooting

/* refrence materials
https://www.w3schools.com/jquery/html_addclass.asp
https://www.w3schools.com/jquery/sel_eq.asp
https://api.jquery.com/children/
https://api.jquery.com/each/
http://minifiedjs.com/api/each.html
https://www.w3schools.com/js/js_functions.asp
https://www.w3schools.com/jquery/html_attr.asp
https://www.w3schools.com/jsref/met_nodelist_item.asp


FROM STARTER FILE:

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML

 */

///OUTLINE  
/*
   *   - loop through each card and create its HTML
   *   - add each card's HTML to the page

0. create container
1.  begin un ordered list
      assign class "deck"
        .container .deck
2.  assign class card to list item
3.  add card styling
4.  call tile image and value
*/

  function write_html() 
  {
    $(".container").append('<ul class="deck"></ul>');
    //.container class append unordered list with class deck
    for (var i = 0; i < deck.length; i++) 
    //for loop set i = 0 at beginning of loop then; check that i < len(deck); if true add one and rpeat loop until false
    {
      $(".deck").append('<li class="card"><i></i></li>');
      // place list item "i" with class after .deck
      $.each($(".deck .card"), function(i, shape) {
        //do this for each j query variable with class .deck .card, 
        // set function parameters i and shape
           // function calls code:
        $(shape).attr("selected_card_loc", i);
      // this sets parameter shape attribute "selected card loc" and value "i"  
      });
    }      //executed if for boolean is true true

  }

//when researching syntax i found it's best to preface jQuery variables with "$"
//https://stackoverflow.com/questions/846585/can-someone-explain-the-dollar-sign-in-javascript

  function deal_cards() {
    var shuffled_cards = [];
    //create variable shuffled cards as an empty array 
    shuffled_cards = shuffle(deck);
    //run provided shuffle function
    for (var i = 0; i < deck.length; i++) {
      //for loop set i = 0 to start

      $(".deck .card")
        .children()
        //returns elements that are direct children of above jquery variable
        .eq(i)
        //return element with index "i"
        .addClass(shuffled_cards[i]);
        //addClass
    }
      // as long as i is less than deck length run code until false
      // 
  }

//*************TIME VARIABLES********//

  var sec2,
    min2,
    hours2 = 0;
  var seconds,
    minutes,
    hours = 0;
  var time_passed = 0;
  var timer;  // variable to hold intervalID from the run_timer() function.


//run_timer function calls setInterval and the function time_passed
//and then incremented by 1. It also outputs the time in the score Panel
//reference: https://stackoverflow.com/questions/109086/stop-setinterval-call-in-javascript

  function run_timer() {
    timer = setInterval(function() {
        time_passed++;
        $(".score-panel .timer").text(time(time_passed));
  }, 1000);
}

//timer starts when first card is selected
// time format is HH:MM:SS or 00:00:00.
//Function utilized from: https://stackoverflow.com/questions/2604450/how-to-create-a-jquery-clock-timer

  function format_time(format_time) {
    return (format_time < 10 ? "0" : "") + format_time;
  }

//format_time function formats the zeros in the score panel
//pads with leading 0 when less than 10

  function time(time_passed) {
    hours = Math.floor(time_passed / 3600);
    time_passed %= 3600;
    minutes = Math.floor(time_passed / 60);
    time_passed %= 60;
    seconds = Math.floor(time_passed);
    var hours2 = format_time(hours);
    var min2 = format_time(minutes);
    var sec2 = format_time(seconds);
    var time_string =
    hours2 + ":" + min2 + ":" + sec2;
    return time_string;
  }



  write_html();
  deal_cards();

 //  set timer_on_off to 0 (off)
// if time passed is 0 (matching data type also)timer_on_off var if off
// then turn timer_on_off on (set to 1) and execute run_timer function
// on initial card click without this var timer would restart on each click

  var timer_on_off = 0;
  $(".card").click(function() {
    if (time_passed === 0 && !timer_on_off) {
      timer_on_off = 1;
      run_timer();
    }
    if (
// number of active cards must be less than 2
      number_active < 2 &&
      !$(this)
        .children()
        .hasClass("open")
    ) {
      $(this).toggleClass("open");
      //toggleClass will toggle the selected card to open
      //toggleclass was more efficient than addClass and remove class
      // ref: http://api.jquery.com/toggleclass/
      number_active++;
      // add one to num active 
      if (number_active === 1) {
        //if num active is 1 add attributes of selected_card_loc to end of 
        // card_position 
        card_position.push($(this).attr("selected_card_loc"));
        selected_cards.push(
          $(this)
            .children()
            .attr("class")
        );
        //also push element and all children to selected_cards
      } else {
        card_position.push($(this).attr("selected_card_loc"));
        selected_cards.push(
          $(this)
            .children()
            .attr("class")
        );


        //clear card position index, increase move count by one and reset number_active to 0

        // if above conditions are not met then confirm cardcard position index 0 is not equal or is of a different type than item one in card_position list
        //set timeout function variable ".card" with class .open; remove class and replace with default "card" class
        //   then dump lists increase moves and reset number_active

        //finally if neither of the above are true then remove class from all  ".open" class cards and change back to "card"
        //   then dump lists increase moves and reset number_active

        if (
          selected_cards[0] === selected_cards[1] &&
          card_position[0] !== card_position[1]
        // if position 0 and position 1 of selected cards are the same and card position index 0 is not equal or is of a different type than 
        // index one in card_position list (to prevent same card being picked twice resulting in a match)
        ) {
          $(".card")
            .filter(".open")
            .removeClass()
            .addClass("card match");
        // if both conditions are met then chnage class from "open" tp match and add 2 to the number showing
          selected_cards = [];
          card_position = [];
          number_active = 0;
        // dump list selected_cards and card_position
        //reset number active to 0       
          number_showing += 2;
        // increase number showing by 2
          move_count += 1;
        //add one to move counter
                  $(".moves").text(move_count);
        //define jquery variable moves as move_count formatted as text 
        } else if (card_position[0] !== card_position[1]) {
        //if card position 0 and 1 dont match set timeout
          setTimeout(function() {
            $(".card")
              .filter(".open")
              .removeClass()
              .addClass("card");
        // drop open class and add card
            selected_cards = [];
            card_position = [];
            number_active = 0;
        // dump list selected_cards and card_position
        //reset number active to 0 
            move_count += 1;            
        //add one to move counter
            $(".moves").text(move_count);
        //define jquery variable moves as move_count formatted as text 
          }, 250);
        //timeout set to 250ms or .25 sec
        } else {
          setTimeout(function() {
        // else timout
            $(".card")
              .filter(".open")
              .removeClass()
              .addClass("card");
        //drop open class and add card
            selected_cards = [];
            card_position = [];
            number_active = 0;
        //reset arrays and num active
            $(".moves").text(move_count);
        //show move counter
          }, 1000);
        // this timer left at 1 second so failures would be easier to spot
        }
      }
      //the following adjusts the star rating in the score panel and the final end_screen
      //If numberOfMoves is between 17 and 25 user gets a 2 star rating.
      //If numberOfMoves is 26 or over uset gets a 1 star rating
      if (move_count > 17 && move_count < 26) {
        var thirdStar = $(".stars")
          .find("li")
          .eq(2);
        thirdStar.css("color", "black");
      }
      if (move_count > 25) {
        var secondStar = $(".stars")
          .find("li")
          .eq(1);
        secondStar.css("color", "black");
      }
    }
//Once all cards are matched, this calls a end_screen with numberOfMoves, timer and a restart option
//updates the css to force it into the foreground by using block and changing the z index to 1000
    if (number_showing === deck.length) {
      clearInterval(timer);
      $(".end_screen").css("display", "block");
      $(".end_screen").css("z-index", "1000");
      end_screen_display();
    }
  });
});

// end_screen_display function that is used to display the star rating,
// number of moves to complete, time it took to complete and restart
  function end_screen_display() {
    $(".score-panel .stars")
      .clone()
      .appendTo($(".end_screen_stars"));
    $(".moves")
      .clone()
      .appendTo($(".end_screen_moves"));
    $(".timer")
      .clone()
      .appendTo($(".end_screen_timer"));
  }