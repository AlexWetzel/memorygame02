// Function when selecting the first of two panels
function selectOne(select) {
  flipPanel(select);
  firstSelect = select;
}

// Function when selecting the second panel
function selectAnother(select) {
  flipPanel(select);

  var first = firstSelect.attr("data-id");
  var second = select.attr("data-id");
  // Compare the first and second selected panels and see if they match
  if(first === second) {
    console.log("match!");
    firstSelect = "";
  }
  else {
    // Prevents selecting a panel before the timeout function is complete
    enableClicks = false;
    console.log("no match");

    // Display the selected panels when they don't match, then flip them over after 2 seconds
    window.setTimeout(function(){
      flipPanel(select);
      flipPanel(firstSelect);
      firstSelect = "";
      enableClicks = true;
    }, 2000)
  }

}

// Function that "flips" panels by toggling the class
function flipPanel(panel) {
  panel.toggleClass("face_up face_down")
}

// Variable that holds the first selected element in a pair
var firstSelect = "";
// Number of pairs that need to matched to win
var pairs = 2;
// Number of matched panels
var match = 0;
// Used to prevent unintended behavior
var enableClicks = true;


$(document).on("click", ".face_down", function() {
  if(enableClicks === true) {
    var selection = $(this)
    console.log(selection.attr("data-id"));
    
    // Check if another panel was selected
    if(firstSelect === ""){
      selectOne(selection);
    }
    else {
      selectAnother(selection);
    }
  }
})
