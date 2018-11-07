function selectOne(select) {
  console.log("foo")
  firstSelect = select;

  //...
}

function selectAnother(select) {
  console.log("bar")

  if(select === firstSelect) {
    console.log("match!")
  }
  else {
    console.log("no match")
  }

  firstSelect = "";
}

var firstSelect = "";
var pairs = 2;
var match = 0;




$(".box").click(function() {
  var selection = $(this).attr("data-id");
  
  if(firstSelect === ""){
    selectOne(selection);
  }
  else {
    selectAnother(selection);
  }
})
