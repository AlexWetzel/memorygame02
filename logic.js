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
    console.log("match!")
  }
  else {
    console.log("no match")
    flipPanel(select);
    flipPanel(firstSelect);
  }

  firstSelect = "";
}

function flipPanel(panel) {
  panel.toggleClass("face_up face_down")
}

var firstSelect = "";
var pairs = 2;
var match = 0;


$(document).on("click", ".face_down", function() {

  var selection = $(this)
  console.log(selection.attr("data-id"));
  
  if(firstSelect === ""){
    selectOne(selection);
  }
  else {
    selectAnother(selection);
  }
})
