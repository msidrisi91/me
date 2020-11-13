document.getElementsByTagName("BODY")[0].addEventListener("wheel", myFunction);

function myFunction(e) {
    console.log(e.deltaY);
    if(e.deltaY < 0){
    // this.style.display = "none";
    // document.getElementById('page1').style.display = "inline";
        $( "#page1" ).fadeIn( "slow", function() {});
    } else if(e.deltaY > 0){
       // document.getElementById('page1').style.display = "none";
        $( "#page1" ).fadeOut( "slow", function() {});
    }
}