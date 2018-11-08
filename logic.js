// Function when selecting the first of two panels
function selectOne(select) {
  flipPanel(select);
  firstSelect = select;

  //...
}

// Function when selecting the second panel
function selectAnother(select) {
  flipPanel(select);

  var first = firstSelect.attr("data-id");
  var second = select.attr("data-id");
  if(first === second) {
    console.log("match!");
    firstSelect = "";
  }
  else {
    enableClicks = false;
    console.log("no match");

    window.setTimeout(function(){
      flipPanel(select);
      flipPanel(firstSelect);
      firstSelect = "";
      enableClicks = true;
    }, 2000)
  }

}

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
    
    if(firstSelect === ""){
      selectOne(selection);
    }
    else {
      selectAnother(selection);
    }
  }
})
