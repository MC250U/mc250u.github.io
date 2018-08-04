# Memory Game Project

This memory game project is a spin on an old card game "concentration"

"Concentration, also known as Match Match, Match Up, Memory, Pelmanism, Shinkei-suijaku, Pexeso or simply Pairs, is a card game in which all of the cards are laid face down on a surface and two cards are flipped face up over each turn. The object of the game is to turn over pairs of matching cards."

source: https://en.wikipedia.org/wiki/Concentration_(game)

The object of the game is to test the players memory and concentration by turning over two cards at a time in an attempt to find a matching pair, if a match is found those cards disappear. If the revealed cards do not match the cards are flipped back over and two more cards are selected.  The game continues until all matches have been found and all cards have disappeared.  The player is scored base on the number of moves it takes to complete the game earning 1,2, or 3 stars.  The game also tracks the time taken to complete starting from the players first card selected although this is not included in the scoring.  The first card selected will also trigger the background music to play at 20% of speaker volume.  Once complete the game will display a window with a congratulatory message and ending stats: stars earned, moves made, and Time taken to complete.  It will also give the Option to "Click here to play again!".  Selecting this option or the reset option on the main page will cause the page to refresh, resetting everything to its initial state and allow the player to start over.  

 index.html
    This is the frame on which all the other elements depend on.  It has two major components:
 
 Header
    This contains all the metadata for the site as well as the links incorporating the CSS Stylesheet (styles.css) and the JavaScript (script.js).  These files control the majority of the user experience including nearly all game functions
 Body
    The body section of the HTML file contains two main segments
      1.  The Score Panel this is the live user stats including 
          - current stars
          - time elapsed
          - button to restart.
      2.  The end screen is the modal that is displayed upon game completion it will have 
          - Final Time
          - Number of Moves
          - Stars Earned
          - Clickable Option to Play Again which will cause page to refresh and game to reset to initial status
    Remaining body elements are added by the script.js file

 style.css
    style.css is the cascading style sheet for the styling of the page.  It adjusts colors, font, spacing, alignment, etc. for each element on the page.  The file consists of:
      1. Base Card Styles
      2. All alternative card styles when card is flipped/ matched/ not matched including basic animations when flipped
      2. End Screen popup style
      3. Styling for html elements visible on page
      4. Styling for score panel

 Script.js
    This is the script that controls most elements of the game, including functions that set game parameters such as:
      1. Play audio - attaches file and starts music on click
      2. Shuffle - Randomizes card order each time page loads
      3. Write_HTML - creates HTML tags and layout for the card deck
      4. Deal_Cards - Assigns shuffled cards to the HTML tags
      5. Format_time - formats time if less than 10 min populates 0 if not returns blank
      6. Run_timer - sets timer by running a loop to increase time passed by one every second
      7. Time function - formats time into hh:mm:ss or 00:00:00 by dividing time passed by the appropriate interval
             it then calls the format_time function to further format numbers final compiling them into time_string variable
      8. Time_on_off - is a Boolean value fed by a function determining if the timer is on or off based on click
    Multiple loops run based on selections and game condition
      1. Loops verify a variety of conditions before supplying the correct out put
         - If card is selected toggle card open format
         - If cards match and are not the same card apply card matched format
         - If cards do not match return to default class
         - If increasing move count independent of above two conditions
    Other Actions not driven by function
      1. Stars are removed based on number of clicks less than 17 clicks earns 3 stars between 18 and 25 earns two and more than 25 earns one
      2.  When game is complete stats from score panel are copied to the end_screen and displayed to the user

 Dependencies
      1. Deal_cards() required write_html() be called first
      2. Deal_cards() required shuffle() function to randomize cards
      3. run_timer() requires time_passed to be 0 and timer_on_off be set to off (0)
      4. run_timer() uses time_passed as its reporting variable increasing it by one each second
      5. time() uses time_passed dividing it by appropriate ratios to get hh:mm:ss format
      6. time() required format_time to pad time with leading zeroes where needed
      7. end_screen_display() copies results from score panel and adds it to the ending popup
      8. restart() both reload html page causing full reload
      9. play_audio() depends on audio constraints being previously set
      10. play_audio() depends on user action "click" to launch

